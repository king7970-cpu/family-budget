/* ===== Quick Add — minimal standalone expense-entry page =====
   Reads/writes the exact same localStorage structure as the main app (app.js). */

const STORAGE_KEY = 'familyBudgetData_v1';
const LAST_CAT_KEY = 'familyBudgetLastCategory';

function uid() { return Math.random().toString(36).slice(2, 10); }
function todayStr() { return new Date().toISOString().slice(0, 10); }
function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return null;
}
function saveData(d) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
  if (window.budgetDocRef) {
    window.budgetDocRef.set(d).catch((err) => console.error('Cloud sync save failed', err));
  }
}

// Fetches the latest shared data from the cloud (short timeout), falling
// back to the local cache if offline or the cloud isn't reachable in time.
async function fetchFreshData() {
  if (window.budgetDocRef) {
    try {
      const snap = await Promise.race([
        window.budgetDocRef.get(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000)),
      ]);
      if (snap.exists) return snap.data();
    } catch (e) {
      console.error('Cloud fetch failed, using local cache', e);
    }
  }
  return loadData();
}

function monthsBetweenInclusive(startKey, endKey) {
  const [sy, sm] = startKey.split('-').map(Number);
  const [ey, em] = endKey.split('-').map(Number);
  return Math.max(1, (ey - sy) * 12 + (em - sm) + 1);
}

// Returns { name, remaining, budget, isFund } for the category an expense was
// just logged against, so we can show "X ₪ left this month" right after saving.
function computeCategoryBalance(freshData, catType, catId, dateStr) {
  const monthKeyStr = dateStr.slice(0, 7);
  if (catType === 'fund') {
    const fund = (freshData.funds || []).find(f => f.id === catId);
    if (!fund) return null;
    const months = monthsBetweenInclusive(fund.startMonth || monthKeyStr, monthKeyStr);
    const contributed = months * (fund.annualTarget / 12);
    const withdrawn = (freshData.expenses || [])
      .filter(e => e.catType === 'fund' && e.catId === fund.id)
      .reduce((s, e) => s + e.amount, 0);
    return { name: fund.name, remaining: contributed - withdrawn, budget: fund.annualTarget, isFund: true };
  }
  const list = catType === 'fixed' ? freshData.fixed : freshData.variable;
  const cat = (list || []).find(c => c.id === catId);
  if (!cat) return null;
  const spent = (freshData.expenses || [])
    .filter(e => e.catType === catType && e.catId === catId && e.date.slice(0, 7) === monthKeyStr)
    .reduce((s, e) => s + e.amount, 0);
  return { name: cat.name, remaining: cat.amount - spent, budget: cat.amount, isFund: false };
}

function fmtILS(n) { return Math.round(n || 0).toLocaleString('he-IL') + ' ₪'; }

function showBalanceModal(balance) {
  const overlay = document.getElementById('balanceModalOverlay');
  if (!overlay || !balance) return;
  document.getElementById('balanceModalCat').textContent = balance.name;
  document.getElementById('balanceModalRemaining').textContent = fmtILS(balance.remaining);
  document.getElementById('balanceModalRemaining').style.color = balance.remaining < 0 ? 'var(--danger)' : 'var(--good)';
  document.getElementById('balanceModalOf').textContent =
    (balance.isFund ? 'נצבר בקרן, מתוך יעד שנתי ' : 'נשאר החודש, מתוך תקציב ') + fmtILS(balance.budget);
  const pct = balance.budget > 0 ? (balance.isFund
    ? ((balance.budget - balance.remaining) / balance.budget) * 100
    : ((balance.budget - balance.remaining) / balance.budget) * 100) : 0;
  const bar = document.getElementById('balanceModalBar');
  bar.style.width = Math.max(0, Math.min(100, pct)) + '%';
  bar.className = 'progress-inner' + (balance.remaining < 0 ? ' over' : pct > 85 ? ' warn' : '');
  overlay.classList.remove('hidden');
}

let data = loadData();

(async () => {
  data = (await fetchFreshData()) || data;
  const hasCategories = data && ((data.variable && data.variable.length) || (data.fixed && data.fixed.length) || (data.funds && data.funds.length));
  if (!hasCategories) {
    document.getElementById('quickForm').style.display = 'none';
    document.getElementById('quickEmpty').style.display = 'block';
  } else {
    initForm();
  }
})();

function categoryGroups() {
  return [
    { type: 'variable', items: data.variable || [] },
    { type: 'fund', items: data.funds || [] },
    { type: 'fixed', items: data.fixed || [] },
  ];
}

// Looks up a category by exactly what the user typed — trims, matches
// case-insensitively. Returns "type:id" or null.
function resolveCategoryByName(typedName) {
  const norm = (typedName || '').trim().toLowerCase();
  if (!norm) return null;
  for (const g of categoryGroups()) {
    const found = g.items.find(item => item.name.trim().toLowerCase() === norm);
    if (found) return g.type + ':' + found.id;
  }
  return null;
}

function findCatName(type, id) {
  const list = type === 'fixed' ? data.fixed : type === 'variable' ? data.variable : data.funds;
  const found = (list || []).find(x => x.id === id);
  return found ? found.name : '';
}

function flagInvalidCategory(inputEl) {
  inputEl.focus();
  inputEl.style.borderColor = 'var(--danger)';
  setTimeout(() => { inputEl.style.borderColor = ''; }, 1200);
}

function initForm() {
  // category field: type-to-search text input backed by a shared datalist
  const catInput = document.getElementById('qCategory');
  const datalist = document.getElementById('qCategoryDatalist');
  let html = '';
  categoryGroups().forEach(g => {
    g.items.forEach(item => { html += `<option value="${escapeHtml(item.name)}"></option>`; });
  });
  datalist.innerHTML = html;

  const lastCat = localStorage.getItem(LAST_CAT_KEY) || '';
  if (lastCat) {
    const [lastType, lastId] = lastCat.split(':');
    catInput.value = findCatName(lastType, lastId);
  }

  // business autocomplete, from history
  const businessSet = new Set();
  (data.expenses || []).forEach(e => { if (e.business) businessSet.add(e.business); });
  document.getElementById('qBusinessList').innerHTML =
    [...businessSet].sort((a, b) => a.localeCompare(b, 'he')).map(b => `<option value="${escapeHtml(b)}"></option>`).join('');

  document.getElementById('qDate').value = todayStr();

  document.getElementById('qToggleExtra').addEventListener('click', () => {
    document.getElementById('qExtra').classList.toggle('open');
  });

  document.getElementById('qPayMethod').addEventListener('change', (e) => {
    document.getElementById('qCardLast4Wrap').classList.toggle('hidden', e.target.value !== 'credit');
  });

  document.getElementById('qSave').addEventListener('click', saveExpense);
  document.getElementById('qAmount').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveExpense();
  });

  const closeBtn = document.getElementById('balanceModalClose');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    document.getElementById('balanceModalOverlay').classList.add('hidden');
    document.getElementById('qAmount').focus();
  });
}

async function saveExpense() {
  const amountInput = document.getElementById('qAmount');
  const amount = parseFloat(amountInput.value);
  const catInput = document.getElementById('qCategory');
  if (!amount || amount <= 0) {
    amountInput.focus();
    amountInput.style.borderColor = 'var(--danger)';
    setTimeout(() => { amountInput.style.borderColor = ''; }, 900);
    return;
  }

  const saveBtn = document.getElementById('qSave');
  saveBtn.disabled = true;
  // Pull the latest shared data first — so we never clobber another device's
  // changes, and so a category added on another device resolves correctly too.
  data = (await fetchFreshData()) || data;
  saveBtn.disabled = false;

  const catValue = resolveCategoryByName(catInput.value);
  if (!catValue) {
    flagInvalidCategory(catInput);
    return;
  }
  const [catType, catId] = catValue.split(':');
  const business = document.getElementById('qBusiness').value.trim();
  const date = document.getElementById('qDate').value || todayStr();
  const note = document.getElementById('qNote').value.trim();
  const paymentMethod = document.getElementById('qPayMethod').value;
  const cardLast4 = paymentMethod === 'credit' ? document.getElementById('qCardLast4').value.trim().slice(-4) : '';
  const isRecurring = document.getElementById('qRecurring').checked;

  const fresh = data;
  fresh.expenses = fresh.expenses || [];
  fresh.recurringTemplates = fresh.recurringTemplates || [];

  let recurringId = null;
  if (isRecurring) {
    const dayOfMonth = new Date(date).getDate() || 1;
    const template = { id: uid(), catType, catId, amount, business, note, paymentMethod, cardLast4, dayOfMonth };
    fresh.recurringTemplates.push(template);
    recurringId = template.id;
  }
  const expense = { id: uid(), date, catType, catId, amount, business, note, paymentMethod, cardLast4 };
  if (recurringId) expense.recurringId = recurringId;
  fresh.expenses.push(expense);
  saveData(fresh);
  localStorage.setItem(LAST_CAT_KEY, catValue);

  const balance = computeCategoryBalance(fresh, catType, catId, date);

  // reset for the next quick entry, keep category selected
  amountInput.value = '';
  document.getElementById('qBusiness').value = '';
  document.getElementById('qNote').value = '';
  document.getElementById('qDate').value = todayStr();
  document.getElementById('qPayMethod').value = '';
  document.getElementById('qCardLast4').value = '';
  document.getElementById('qCardLast4Wrap').classList.add('hidden');
  document.getElementById('qRecurring').checked = false;

  showBalanceModal(balance);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
