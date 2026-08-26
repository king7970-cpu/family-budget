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

  document.getElementById('qSave').addEventListener('click', saveExpense);
  document.getElementById('qAmount').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveExpense();
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

  const fresh = loadData() || data; // re-read in case another tab changed it
  fresh.expenses = fresh.expenses || [];
  fresh.expenses.push({ id: uid(), date, catType, catId, amount, business, note });
  saveData(fresh);
  localStorage.setItem(LAST_CAT_KEY, catValue);

  // reset for the next quick entry, keep category selected
  amountInput.value = '';
  document.getElementById('qBusiness').value = '';
  document.getElementById('qNote').value = '';
  document.getElementById('qDate').value = todayStr();
  amountInput.focus();

  const toast = document.getElementById('quickToast');
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
