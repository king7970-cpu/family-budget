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

const data = loadData();
const hasCategories = data && ((data.variable && data.variable.length) || (data.fixed && data.fixed.length) || (data.funds && data.funds.length));

if (!hasCategories) {
  document.getElementById('quickForm').style.display = 'none';
  document.getElementById('quickEmpty').style.display = 'block';
} else {
  initForm();
}

function initForm() {
  // category select, grouped like the main app
  const sel = document.getElementById('qCategory');
  const lastCat = localStorage.getItem(LAST_CAT_KEY) || '';
  const groups = [
    { label: 'משתנות', type: 'variable', items: data.variable || [] },
    { label: 'קרנות שנתיות', type: 'fund', items: data.funds || [] },
    { label: 'קבועות', type: 'fixed', items: data.fixed || [] },
  ];
  let html = '';
  groups.forEach(g => {
    if (!g.items.length) return;
    html += `<optgroup label="${escapeHtml(g.label)}">`;
    g.items.forEach(item => {
      const value = g.type + ':' + item.id;
      html += `<option value="${value}" ${value === lastCat ? 'selected' : ''}>${escapeHtml(item.name)}</option>`;
    });
    html += `</optgroup>`;
  });
  sel.innerHTML = html;

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

function saveExpense() {
  const amountInput = document.getElementById('qAmount');
  const amount = parseFloat(amountInput.value);
  const catValue = document.getElementById('qCategory').value;
  if (!catValue || !amount || amount <= 0) {
    amountInput.focus();
    amountInput.style.borderColor = 'var(--danger)';
    setTimeout(() => { amountInput.style.borderColor = ''; }, 900);
    return;
  }
  const [catType, catId] = catValue.split(':');
  const business = document.getElementById('qBusiness').value.trim();
  const date = document.getElementById('qDate').value || todayStr();
  const note = document.getElementById('qNote').value.trim();
  const paymentMethod = document.getElementById('qPayMethod').value;
  const cardLast4 = paymentMethod === 'credit' ? document.getElementById('qCardLast4').value.trim().slice(-4) : '';
  const isRecurring = document.getElementById('qRecurring').checked;

  const fresh = loadData() || data; // re-read in case another tab changed it
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
