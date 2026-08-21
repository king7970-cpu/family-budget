/* ===== Family Budget App ===== */

// Auto-generated 2026-08-16 from the user's April example categorization file.
// Maps known merchant names -> category name (merged with existing app categories where equivalent,
// business-side ones prefixed "עסקי - " since the app has no separate business budget yet).
const EXCEL_TRAINING_CATEGORIES = [
  "אחזקת הבית", "ביגוד והנעלה", "ביטוחים", "בריאות", "גן", "דלק לרכב", "הוראת קבע",
  "השתלמות וקורסים", "והשיאנו", "טלפון", "לבדוק", "מותרות/פינוקים", "מזון", "מנויים",
  "מתנות", "ספרים", "עיתונים", "עמלות", "עסקי - הוצאות ספקים", "עסקי - השקעה ציוד טווח ארוך",
  "עסקי - טלפון", "עסקי - מיס", "עסקי - משכורת", "עסקי - פירסום", "עסקי - קורסים",
  "עסקי - שליחים", "עסקי - תמונות וAI", "רב-קו ונסיעות", "רכב שוטף", "שונות שוטפות",
  "תחבורה", "תרומות",
];

const EXCEL_TRAINING_ENTRIES = [
  { biz: "** דמי כרטיס **", category: "עמלות" },
  { biz: "B&H PHOTO MOTO", category: "מתנות" },
  { biz: "CARREFOUR עמישב פ\"ת", category: "מזון" },
  { biz: "Google One", category: "מנויים" },
  { biz: "GOOGLE TOWNSHIP", category: "מנויים" },
  { biz: "Google YouTube", category: "מנויים" },
  { biz: "GOOGLE YOUTUBEPREMIUM", category: "מנויים" },
  { biz: "GOOGLE ZING JEWISH MU", category: "מנויים" },
  { biz: "PADDLE.NET* PHOTOAPP", category: "מנויים" },
  { biz: "PADDLE.NET* VOCALREMOV", category: "מנויים" },
  { biz: "SP MAINSTREAM", category: "מנויים" },
  { biz: "VGTINES.COM", category: "מנויים" },
  { biz: "א. לוינשטין", category: "מזון" },
  { biz: "אור לרגש", category: "שונות שוטפות" },
  { biz: "אושר עד פתח תקווה", category: "מזון" },
  { biz: "אושר עד קריית אונו", category: "מזון" },
  { biz: "אושר עד/בני ברק", category: "מזון" },
  { biz: "איגוד חרדי לתרבות ואמנות", category: "תרומות" },
  { biz: "אייס - סגולה", category: "מזון" },
  { biz: "אישית", category: "מותרות/פינוקים" },
  { biz: "אליהו דגים", category: "מזון" },
  { biz: "אלקטרה מוצרי צריכה- שירות", category: "אחזקת הבית" },
  { biz: "אמישרגז", category: "הוראת קבע" },
  { biz: "בחצרות החיים ארגון החבורות", category: "תרומות" },
  { biz: "ביטוח כללי מנורה מבטחים", category: "ביטוחים" },
  { biz: "בית הכנסת המרכזי הבעש\"ט", category: "תרומות" },
  { biz: "בית יעקב חיים", category: "תרומות" },
  { biz: "בלו בני ברק", category: "ביגוד והנעלה" },
  { biz: "גוטפלוס", category: "השתלמות וקורסים" },
  { biz: "דברי יציב", category: "תרומות" },
  { biz: "דייטש מרקט", category: "מזון" },
  { biz: "דמי כרטיס", category: "עמלות" },
  { biz: "דמי כרטיס בנק דיסקונט", category: "עמלות" },
  { biz: "דמי כרטיס בנק פאגי", category: "עמלות" },
  { biz: "דן חברה לתחבורה ציבורית", category: "תחבורה" },
  { biz: "הדרן הו\"ק", category: "טלפון" },
  { biz: "הוז'רי פלוס", category: "ביגוד והנעלה" },
  { biz: "הכול ב2 פלוס (מגוון)", category: "ספרים" },
  { biz: "הלו תימן", category: "מותרות/פינוקים" },
  { biz: "המחשמל", category: "מתנות" },
  { biz: "הקולה בעיר מהד", category: "מזון" },
  { biz: "הראל (שלוח) בטוח חיים", category: "ביטוחים" },
  { biz: "הראל ביטוח חיים", category: "ביטוחים" },
  { biz: "השבועון לבית היהודי הו\"ק", category: "עיתונים" },
  { biz: "והסירותי מחלה- קופת העיר", category: "תרומות" },
  { biz: "והשיאנו", category: "והשיאנו" },
  { biz: "ועד הרבנים לענייני צדקה ע.ר.", category: "תרומות" },
  { biz: "ושננתם", category: "תרומות" },
  { biz: "זול פעמי פתח תקוה", category: "מזון" },
  { biz: "זר תחנות דלק בע\"מ", category: "דלק לרכב" },
  { biz: "זרעים- הליכות הארץ", category: "תרומות" },
  { biz: "חברת החשמל לישראל בע\"מ", category: "הוראת קבע" },
  { biz: "י.מ.ו אופטיקה בע\"מ", category: "בריאות" },
  { biz: "יד אברהם ירושלים", category: "תרומות" },
  { biz: "יוסי תקשורת בע\"מ", category: "טלפון" },
  { biz: "יריד הבית צעצועים", category: "אחזקת הבית" },
  { biz: "ישיבת ארוחות התורה הוק", category: "תרומות" },
  { biz: "ישיבת מיר - הו\"ק", category: "תרומות" },
  { biz: "כביש 6", category: "רכב שוטף" },
  { biz: "כוללי הש\"ס", category: "תרומות" },
  { biz: "כיף לקרוא", category: "ספרים" },
  { biz: "כל בו יריד הבית", category: "אחזקת הבית" },
  { biz: "כל העלונים", category: "ספרים" },
  { biz: "כל ישראל ערבים", category: "תרומות" },
  { biz: "לטהרנו", category: "הוראת קבע" },
  { biz: "למחייתם", category: "תרומות" },
  { biz: "לשכת הילדים - מרים ארשטר", category: "גן" },
  { biz: "מאפית הכפר נחלת יצחק", category: "מזון" },
  { biz: "מבצר התורה סערט ויז'ניץ", category: "תרומות" },
  { biz: "מגדל חיים/בריאות", category: "ביטוחים" },
  { biz: "מגזין משפחה", category: "עיתונים" },
  { biz: "מוטיס", category: "מותרות/פינוקים" },
  { biz: "מיכל לויטין", category: "מנויים" },
  { biz: "מיר על המחיה - הו\"ק", category: "תרומות" },
  { biz: "מיתב תאגיד למ", category: "הוראת קבע" },
  { biz: "מסלולרי בעמ", category: "מנויים" },
  { biz: "מעדני הבית", category: "מזון" },
  { biz: "מקפ\"ת- מרכזים קהילתיים פת", category: "הוראת קבע" },
  { biz: "מרכז הצדקה ע\"ר", category: "תרומות" },
  { biz: "מרקט זול השקדיה", category: "מזון" },
  { biz: "משרד התחבורה - רשיונות רכ", category: "רכב שוטף" },
  { biz: "נותנים כח (ע\"ר)", category: "תרומות" },
  { biz: "נטפרי", category: "מנויים" },
  { biz: "נירית לגן", category: "גן" },
  { biz: "סופר- פארם הדר גנים פתח", category: "בריאות" },
  { biz: "סטאר חלפים", category: "רכב שוטף" },
  { biz: "ע. פ\"ת ארנונה ה.קבע", category: "הוראת קבע" },
  { biz: "עוללים- קופת העיר", category: "תרומות" },
  { biz: "עזר מציון (ע\"ר- ) הוראות קבע", category: "תרומות" },
  { biz: "עזר מציון אינטרנטי", category: "תרומות" },
  { biz: "עזרת מחותנים", category: "תרומות" },
  { biz: "עיצוב ופיתוח אתרי אינטרנט", category: "לבדוק" },
  { biz: "עיתון המבשר", category: "עיתונים" },
  { biz: "עמיש CARREFOUR", category: "מזון" },
  { biz: "ערבים-קרנות לאלמנות וליתומים", category: "תרומות" },
  { biz: "פז אפליקציה יילו", category: "דלק לרכב" },
  { biz: "פיצוחי רבי עקיבא", category: "מזון" },
  { biz: "פלאפון חשבון תקופתי", category: "טלפון" },
  { biz: "פנגו-חניונים", category: "רכב שוטף" },
  { biz: "פנגו חשבונית חודשית", category: "רכב שוטף" },
  { biz: "קול כשר בעמ", category: "מזון" },
  { biz: "קופת העיר", category: "תרומות" },
  { biz: "קופת עזר נישואין \"בית ישראל\"", category: "תרומות" },
  { biz: "קופת צדקה פתח תקווה", category: "תרומות" },
  { biz: "קפוצינו ר עקיבא 122", category: "מותרות/פינוקים" },
  { biz: "קרן הבניין סערט ויזניץ", category: "תרומות" },
  { biz: "קרן הלבשה לחתנים דחסידי סערט ויז'ניץ", category: "תרומות" },
  { biz: "קרן מכבי", category: "בריאות" },
  { biz: "קרנות קופת העיר", category: "תרומות" },
  { biz: "רב קו אונליין", category: "רב-קו ונסיעות" },
  { biz: "רפואה שלמה ליווי ותמיכה", category: "תרומות" },
  { biz: "שהחיינו קולורס", category: "ביגוד והנעלה" },
  { biz: "שטראוס מים בע\"מ הו\"ק", category: "לבדוק" },
  { biz: "שיבולי התקווה", category: "מזון" },
  { biz: "שירה מרקט פתח", category: "מזון" },
  { biz: "שירה מרקט פתח תקוה", category: "מזון" },
  { biz: "שירה מרקט פתח תקווה", category: "מזון" },
  { biz: "שירותי גלישה בטוחה", category: "מנויים" },
  { biz: "שס' ושננתם", category: "תרומות" },
  { biz: "שפע טוב סנטר הכל לבניין", category: "אחזקת הבית" },
  { biz: "שרייבר שופ", category: "ביגוד והנעלה" },
  { biz: "תורם", category: "תרומות" },
  { biz: "ספורט פתח תקוה הו\"ק", category: "עסקי - הוצאות ספקים" },
  { biz: "PRO C DESIGNS INC.", category: "עסקי - הוצאות ספקים" },
  { biz: "משה דויטש", category: "עסקי - הוצאות ספקים" },
  { biz: "ב.א. פתרונות תזמון", category: "עסקי - הוצאות ספקים" },
  { biz: "תג נאור בע\"מ", category: "עסקי - הוצאות ספקים" },
  { biz: "מולטיבר", category: "עסקי - הוצאות ספקים" },
  { biz: "מרכז מוסדות סערט ויז'ניץ", category: "עסקי - הוצאות ספקים" },
  { biz: "אייבורי", category: "עסקי - הוצאות ספקים" },
  { biz: "PRINTASTIC US INC", category: "עסקי - הוצאות ספקים" },
  { biz: "מיני ליין", category: "עסקי - הוצאות ספקים" },
  { biz: "REPLIT, INC.", category: "עסקי - השקעה ציוד טווח ארוך" },
  { biz: "GOOGLE*WORKSPACE KDGIF", category: "עסקי - השקעה ציוד טווח ארוך" },
  { biz: "Google Workspace_king7", category: "עסקי - השקעה ציוד טווח ארוך" },
  { biz: "חשבונית ירוקה", category: "עסקי - השקעה ציוד טווח ארוך" },
  { biz: "Adobe", category: "עסקי - השקעה ציוד טווח ארוך" },
  { biz: "DROPBOX*DCJV9BY1MXCV", category: "עסקי - השקעה ציוד טווח ארוך" },
  { biz: "דלתא מובייל", category: "עסקי - טלפון" },
  { biz: "אינטרנט תקשורת", category: "עסקי - טלפון" },
  { biz: "בזק הוראות קבע", category: "עסקי - טלפון" },
  { biz: "ביטוח לאומי רב ספק", category: "עסקי - מיס" },
  { biz: "PAYPAL *156976T6MA", category: "עסקי - משכורת" },
  { biz: "SMOOVE/אי טי פי לוגיק", category: "עסקי - פירסום" },
  { biz: "זילבר ייעוץ והדרכה בעמ", category: "עסקי - קורסים" },
  { biz: "PAYBOX", category: "עסקי - שליחים" },
  { biz: "העברה ב BIT בנה\"פ", category: "עסקי - שליחים" },
  { biz: "BIT", category: "עסקי - שליחים" },
  { biz: "FC* FREEPIK PREMIUM MO", category: "עסקי - תמונות וAI" },
  { biz: "OPENAI *CHATGPT SUBSCR", category: "עסקי - תמונות וAI" },
  { biz: "CLAUDE.AI SUBSCRIPTION", category: "עסקי - תמונות וAI" },
  { biz: "HEYGEN TECHNOLOGY INC.", category: "עסקי - תמונות וAI" },
  { biz: "MIDJOURNEY INC.", category: "עסקי - תמונות וAI" },
];

const STORAGE_KEY = 'familyBudgetData_v1';
const HEB_MONTHS = ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];

function uid() { return Math.random().toString(36).slice(2, 10); }
function monthKey(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'); }
function todayStr() { return new Date().toISOString().slice(0, 10); }
function fmt(n) {
  const v = Math.round(n || 0);
  return v.toLocaleString('he-IL') + ' ₪';
}
function fmtNum(n) { return Math.round(n || 0).toLocaleString('he-IL'); }

function defaultData() {
  const cm = monthKey(new Date());
  return {
    income: 82750,
    fixed: [
      { id: uid(), name: 'הוצאות קבועות (חשבונות/משכנתא/ביטוחים)', amount: 39547 },
      { id: uid(), name: 'החזרי חובות', amount: 37750 },
      { id: uid(), name: 'אשראי מתגלגל', amount: 0 },
    ],
    variable: [
      { id: uid(), name: 'מזון', amount: 8000 },
      { id: uid(), name: 'אוכל בחוץ', amount: 800 },
      { id: uid(), name: 'בית מרקחת', amount: 350 },
      { id: uid(), name: 'איפור וטיפוח', amount: 1200 },
      { id: uid(), name: 'רב-קו ונסיעות', amount: 400 },
      { id: uid(), name: 'סירוקי פאות', amount: 250 },
      { id: uid(), name: 'דלק לרכב', amount: 1500 },
      { id: uid(), name: 'ביגוד והנעלה', amount: 150 },
      { id: uid(), name: 'דמי כיס', amount: 1500 },
      { id: uid(), name: 'מותרות/פינוקים', amount: 250 },
      { id: uid(), name: 'מזומן ללא מעקב', amount: 1000 },
      { id: uid(), name: 'שונות שוטפות', amount: 250 },
      { id: uid(), name: 'קניות ברשת', amount: 300 },
    ],
    funds: [
      { id: uid(), name: 'פורים', annualTarget: 4350, month: 3, startMonth: cm },
      { id: uid(), name: 'פסח', annualTarget: 8250, month: 4, startMonth: cm },
      { id: uid(), name: 'שבועות', annualTarget: 2500, month: 6, startMonth: cm },
      { id: uid(), name: 'קייטנה וציוד לימודי', annualTarget: 2700, month: 7, startMonth: cm },
      { id: uid(), name: 'חופשה שנתית', annualTarget: 6500, month: 8, startMonth: cm },
      { id: uid(), name: 'ראש השנה / יום כיפור', annualTarget: 15250, month: 9, startMonth: cm },
      { id: uid(), name: 'חנוכה', annualTarget: 4000, month: 12, startMonth: cm },
    ],
    expenses: [],
    keywordMap: {}, // "type:id" -> [keyword, keyword, ...] learned from past imports
  };
}

let data = load();

function applyMigrations(parsed) {
  if (!parsed.keywordMap) parsed.keywordMap = {};
  if (!parsed.fixed) parsed.fixed = [];
  if (!parsed.variable) parsed.variable = [];
  if (!parsed.funds) parsed.funds = [];

  // one-time migration: make sure "אשראי מתגלגל" exists as a fixed category
  const hasRevolvingCredit = [...parsed.fixed, ...parsed.variable, ...parsed.funds]
    .some(c => c.name === 'אשראי מתגלגל');
  if (!hasRevolvingCredit) {
    parsed.fixed.push({ id: uid(), name: 'אשראי מתגלגל', amount: 0 });
  }

  // migration: bring in the category structure + merchant knowledge learned from
  // the user's own Excel categorization (בית/עסקי) — add any missing categories,
  // then seed the keywordMap so imports auto-recognize these merchants right away.
  const existingNames = new Set([...parsed.fixed, ...parsed.variable, ...parsed.funds].map(c => c.name));
  EXCEL_TRAINING_CATEGORIES.forEach(name => {
    if (!existingNames.has(name)) {
      parsed.variable.push({ id: uid(), name, amount: 0 });
      existingNames.add(name);
    }
  });
  const nameToKey = {};
  [...parsed.fixed.map(c => ['fixed', c]), ...parsed.variable.map(c => ['variable', c]), ...parsed.funds.map(c => ['fund', c])]
    .forEach(([type, c]) => { nameToKey[c.name] = type + ':' + c.id; });
  EXCEL_TRAINING_ENTRIES.forEach(entry => {
    const key = nameToKey[entry.category];
    if (!key) return;
    if (!parsed.keywordMap[key]) parsed.keywordMap[key] = [];
    const normBiz = entry.biz.trim().toLowerCase();
    if (normBiz && !parsed.keywordMap[key].includes(normBiz)) parsed.keywordMap[key].push(normBiz);
  });

  return parsed;
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = applyMigrations(JSON.parse(raw));
      save(parsed);
      return parsed;
    }
  } catch (e) {}
  const d = applyMigrations(defaultData());
  save(d);
  return d;
}
function save(d) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d || data));
}

/* ===== Derived calculations ===== */

function monthsBetweenInclusive(startKey, endKey) {
  const [sy, sm] = startKey.split('-').map(Number);
  const [ey, em] = endKey.split('-').map(Number);
  return Math.max(1, (ey - sy) * 12 + (em - sm) + 1);
}

function fundMonthlyShare(fund) { return fund.annualTarget / 12; }

function fundSaved(fund, currentMonthKey) {
  const months = monthsBetweenInclusive(fund.startMonth || currentMonthKey, currentMonthKey);
  const contributed = months * fundMonthlyShare(fund);
  const withdrawn = data.expenses
    .filter(e => e.catType === 'fund' && e.catId === fund.id)
    .reduce((s, e) => s + e.amount, 0);
  return contributed - withdrawn;
}

function currentMonthExpenses() {
  const cm = monthKey(new Date());
  return data.expenses.filter(e => e.date.slice(0, 7) === cm);
}

function fixedTotal() { return data.fixed.reduce((s, c) => s + c.amount, 0); }
function variableTotal() { return data.variable.reduce((s, c) => s + c.amount, 0); }
function fundsMonthlyTotal() { return data.funds.reduce((s, f) => s + fundMonthlyShare(f), 0); }

function categorySpent(catId, catType) {
  return currentMonthExpenses()
    .filter(e => e.catType === catType && e.catId === catId)
    .reduce((s, e) => s + e.amount, 0);
}

/* ===== Rendering ===== */

function renderAll() {
  renderDashboard();
  renderExpenseView();
  renderBudgetView();
  renderAnnualView();
  renderBusinessView();
  document.getElementById('monthTitle').textContent = 'תקציב המשפחה — ' + HEB_MONTHS[new Date().getMonth()];
}

function renderDashboard() {
  const income = data.income;
  const fixed = fixedTotal();
  const fundsMonthly = fundsMonthlyTotal();
  const available = income - fixed - fundsMonthly;
  const varTotal = variableTotal();

  document.getElementById('sumIncome').textContent = fmt(income);
  document.getElementById('sumFixed').textContent = fmt(fixed + fundsMonthly);
  const availEl = document.getElementById('sumAvailable');
  availEl.textContent = fmt(available);
  availEl.style.color = available < 0 ? 'var(--danger)' : '';

  const now = new Date();
  const dayOfMonth = now.getDate();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  document.getElementById('dayProgressLabel').textContent = `יום ${dayOfMonth} מתוך ${daysInMonth}`;

  const spentVar = data.variable.reduce((s, c) => s + categorySpent(c.id, 'variable'), 0);
  const remaining = varTotal - spentVar;
  const projected = dayOfMonth > 0 ? (spentVar / dayOfMonth) * daysInMonth : spentVar;

  document.getElementById('spentSoFar').textContent = fmtNum(spentVar);
  document.getElementById('remainingNow').textContent = fmtNum(remaining);
  document.getElementById('remainingNow').style.color = remaining < 0 ? 'var(--danger)' : '';
  document.getElementById('projectedEnd').textContent = fmtNum(projected);
  document.getElementById('projectedEnd').style.color = projected > varTotal ? 'var(--danger)' : 'var(--good)';

  const pct = varTotal > 0 ? (spentVar / varTotal) * 100 : 0;
  const bar = document.getElementById('monthProgressBar');
  bar.style.width = Math.min(100, pct) + '%';
  bar.className = 'progress-inner' + (pct > 100 ? ' over' : pct > 85 ? ' warn' : '');

  const paceNote = document.getElementById('paceNote');
  if (varTotal > 0) {
    const diff = varTotal - projected;
    if (diff < 0) {
      paceNote.textContent = `בקצב ההוצאה הנוכחי, צפויה חריגה של כ-${fmtNum(Math.abs(diff))} ₪ עד סוף החודש.`;
      paceNote.style.color = 'var(--danger)';
    } else {
      paceNote.textContent = `בקצב הנוכחי, צפוי שיוותרו כ-${fmtNum(diff)} ₪ בסוף החודש.`;
      paceNote.style.color = 'var(--good)';
    }
  } else {
    paceNote.textContent = '';
  }

  // category breakdown
  const list = document.getElementById('categoryList');
  list.innerHTML = '';
  if (data.variable.length === 0) {
    list.innerHTML = '<p class="empty-note">אין קטגוריות משתנות. הוסף בלשונית "תקציב".</p>';
  }
  data.variable.forEach(c => {
    const spent = categorySpent(c.id, 'variable');
    const p = c.amount > 0 ? (spent / c.amount) * 100 : 0;
    const row = document.createElement('div');
    row.className = 'cat-row';
    row.innerHTML = `
      <div class="cat-top">
        <span class="cat-name">${escapeHtml(c.name)}</span>
        <span class="cat-nums ${spent > c.amount ? 'deficit' : ''}">${fmtNum(spent)} / ${fmtNum(c.amount)} ₪</span>
      </div>
      <div class="cat-bar-outer"><div class="cat-bar-inner ${p > 100 ? 'over' : p > 85 ? 'warn' : ''}" style="width:${Math.min(100, p)}%"></div></div>
    `;
    list.appendChild(row);
  });

  // funds quick list
  const cmKey = monthKey(new Date());
  const fList = document.getElementById('fundsList');
  fList.innerHTML = '';
  if (data.funds.length === 0) {
    fList.innerHTML = '<p class="empty-note">אין קרנות שנתיות. הוסף בלשונית "תקציב".</p>';
  }
  data.funds.forEach(f => {
    const saved = fundSaved(f, cmKey);
    const p = f.annualTarget > 0 ? (saved / f.annualTarget) * 100 : 0;
    const row = document.createElement('div');
    row.className = 'cat-row fund-row';
    row.innerHTML = `
      <div class="cat-top">
        <span class="cat-name">${escapeHtml(f.name)} <span class="muted">(${HEB_MONTHS[f.month - 1]})</span></span>
        <span class="cat-nums ${saved < 0 ? 'deficit' : ''}">${fmtNum(saved)} / ${fmtNum(f.annualTarget)} ₪</span>
      </div>
      <div class="cat-bar-outer"><div class="cat-bar-inner ${p < 0 ? 'over' : ''}" style="width:${Math.max(0, Math.min(100, p))}%"></div></div>
    `;
    fList.appendChild(row);
  });
}

function escapeHtml(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

/* ===== Add expense view ===== */

function categoryGroups() {
  return [
    { label: 'משתנות', type: 'variable', items: data.variable },
    { label: 'קרנות שנתיות', type: 'fund', items: data.funds },
    { label: 'קבועות', type: 'fixed', items: data.fixed },
  ];
}

// Returns an <optgroup>-structured <select> options HTML block.
// selectedValue is "type:id"; pass '' for a leading placeholder option.
function categoryOptionsHTML(selectedValue, withPlaceholder) {
  let html = withPlaceholder ? `<option value="">— בחר קטגוריה —</option>` : '';
  categoryGroups().forEach(g => {
    if (g.items.length === 0) return;
    html += `<optgroup label="${escapeHtml(g.label)}">`;
    g.items.forEach(item => {
      const value = g.type + ':' + item.id;
      html += `<option value="${value}" ${value === selectedValue ? 'selected' : ''}>${escapeHtml(item.name)}</option>`;
    });
    html += `</optgroup>`;
  });
  return html;
}

function allBusinessNames() {
  const set = new Set();
  data.expenses.forEach(e => { if (e.business) set.add(e.business); });
  return [...set].sort((a, b) => a.localeCompare(b, 'he'));
}

function renderExpenseView() {
  const sel = document.getElementById('expCategory');
  const prevValue = sel.value;
  sel.innerHTML = categoryOptionsHTML(prevValue, false);

  const businessList = document.getElementById('businessList');
  businessList.innerHTML = allBusinessNames().map(b => `<option value="${escapeHtml(b)}"></option>`).join('');

  const log = document.getElementById('expenseLog');
  log.innerHTML = '';
  const monthExpenses = currentMonthExpenses().slice().sort((a, b) => b.date.localeCompare(a.date));
  if (monthExpenses.length === 0) {
    log.innerHTML = '<p class="empty-note">עדיין אין הוצאות רשומות החודש.</p>';
    return;
  }
  monthExpenses.forEach(e => {
    const catName = findCatName(e.catType, e.catId);
    const bizLabel = e.business ? escapeHtml(e.business) : catName;
    const row = document.createElement('div');
    row.className = 'expense-item';
    row.innerHTML = `
      <div class="expense-main">
        <span class="expense-cat">${bizLabel}</span>
        <span class="expense-date">${e.date} · ${escapeHtml(catName)}${e.note ? ' · ' + escapeHtml(e.note) : ''}</span>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="expense-amount">${fmtNum(e.amount)} ₪</span>
        <button class="expense-del" data-id="${e.id}" aria-label="מחק">🗑️</button>
      </div>
    `;
    log.appendChild(row);
  });
  log.querySelectorAll('.expense-del').forEach(btn => {
    btn.addEventListener('click', () => {
      data.expenses = data.expenses.filter(e => e.id !== btn.dataset.id);
      save();
      renderAll();
    });
  });
}

/* ===== Business breakdown view ===== */

function renderBusinessView() {
  const range = document.getElementById('businessRangeSelect').value;
  document.getElementById('businessRangeLabel').textContent = range === 'month'
    ? HEB_MONTHS[new Date().getMonth()]
    : 'כל הזמן';

  const source = range === 'month' ? currentMonthExpenses() : data.expenses;
  const totals = {}; // business name -> {amount, count}
  source.forEach(e => {
    const name = e.business && e.business.trim() ? e.business.trim() : 'ללא שיוך לעסק';
    if (!totals[name]) totals[name] = { amount: 0, count: 0 };
    totals[name].amount += e.amount;
    totals[name].count += 1;
  });

  const el = document.getElementById('businessList2');
  el.innerHTML = '';
  const entries = Object.entries(totals).sort((a, b) => b[1].amount - a[1].amount);
  if (entries.length === 0) {
    el.innerHTML = '<p class="empty-note">אין הוצאות עדיין בטווח הזה.</p>';
    return;
  }
  const grandTotal = entries.reduce((s, [, v]) => s + v.amount, 0);
  entries.forEach(([name, v]) => {
    const pct = grandTotal > 0 ? (v.amount / grandTotal) * 100 : 0;
    const row = document.createElement('div');
    row.className = 'cat-row';
    row.innerHTML = `
      <div class="cat-top">
        <span class="cat-name">${escapeHtml(name)}</span>
        <span class="cat-nums">${fmtNum(v.amount)} ₪ · ${v.count} חיובים</span>
      </div>
      <div class="cat-bar-outer"><div class="cat-bar-inner" style="width:${Math.min(100, pct)}%"></div></div>
    `;
    el.appendChild(row);
  });
}

document.getElementById('businessRangeSelect').addEventListener('change', renderBusinessView);

function findCatName(type, id) {
  const list = type === 'fixed' ? data.fixed : type === 'variable' ? data.variable : data.funds;
  const found = list.find(x => x.id === id);
  return found ? found.name : '(נמחק)';
}

document.getElementById('expenseForm').addEventListener('submit', (ev) => {
  ev.preventDefault();
  const [catType, catId] = document.getElementById('expCategory').value.split(':');
  const amount = parseFloat(document.getElementById('expAmount').value);
  const dateVal = document.getElementById('expDate').value || todayStr();
  const business = document.getElementById('expBusiness').value.trim();
  const note = document.getElementById('expNote').value.trim();
  if (!catType || !amount || amount <= 0) return;
  data.expenses.push({ id: uid(), date: dateVal, catType, catId, amount, business, note });
  save();
  document.getElementById('expAmount').value = '';
  document.getElementById('expBusiness').value = '';
  document.getElementById('expNote').value = '';
  renderAll();
});

/* ===== Import expenses from Excel/CSV ===== */

const DATE_HINTS = ['תאריך', 'date'];
const DESC_HINTS = ['תיאור', 'עסק', 'שם בית עסק', 'פירוט', 'description', 'merchant', 'name'];
const AMOUNT_HINTS = ['סכום', 'חיוב', 'amount', 'total', '₪'];

let importRawRows = [];   // array of arrays (row 0 = headers)
let importHeaders = [];
let pendingImportRows = []; // [{date, desc, amount, catType, catId, skip}]

function guessColumnIndex(headers, hints) {
  for (let i = 0; i < headers.length; i++) {
    const h = String(headers[i] || '').trim().toLowerCase();
    if (hints.some(c => h.includes(c))) return i;
  }
  return -1;
}

function pad2(n) { return String(n).padStart(2, '0'); }

function parseDateCell(v) {
  if (v == null || v === '') return todayStr();
  if (v instanceof Date && !isNaN(v)) return `${v.getFullYear()}-${pad2(v.getMonth() + 1)}-${pad2(v.getDate())}`;
  if (typeof v === 'number' && window.XLSX && XLSX.SSF) {
    try {
      const d = XLSX.SSF.parse_date_code(v);
      if (d) return `${d.y}-${pad2(d.m)}-${pad2(d.d)}`;
    } catch (e) {}
  }
  const s = String(v).trim();
  let m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return `${m[1]}-${pad2(m[2])}-${pad2(m[3])}`;
  m = s.match(/^(\d{1,2})[\/.](\d{1,2})[\/.](\d{2,4})/);
  if (m) {
    let [, d, mo, y] = m;
    if (y.length === 2) y = '20' + y;
    return `${y}-${pad2(mo)}-${pad2(d)}`;
  }
  return todayStr();
}

function parseAmountCell(v) {
  if (typeof v === 'number') return Math.abs(v);
  if (typeof v === 'string') {
    const n = parseFloat(v.replace(/[^\d.\-]/g, ''));
    return isNaN(n) ? 0 : Math.abs(n);
  }
  return 0;
}

// Built-in "smart" dictionary — generic knowledge of common Israeli merchants/terms,
// used when nothing in the user's own learned history (keywordMap) matches yet.
// Each rule: if the description contains one of `tokens`, look for a category whose
// NAME contains one of `hints` — and suggest that, flagged as a guess (needs confirming).
const BUILT_IN_RULES = [
  { tokens: ['שופרסל', 'רמי לוי', 'רמי-לוי', 'ויקטורי', 'יינות ביתן', 'אושר עד', 'טיב טעם', 'יוחננוף', 'חצי חינם', 'קרפור', 'מכולת', 'סופר '], hints: ['מזון', 'סופר'] },
  { tokens: ['וולט', 'wolt', 'ארומה', 'aroma', 'קופיקס', 'cofix', 'מקדונלד', 'mcdonald', 'בורגר', 'burger', 'פיצה', 'pizza', 'דומינו', 'מסעדה', 'קפה קפה', 'גרג', 'landwer', 'לנדוור', 'קטרינג'], hints: ['אוכל בחוץ', 'מסעד'] },
  { tokens: ['פז ', 'פזgas', 'סונול', 'sonol', 'דור אלון', 'דלק ', 'yellow', ' ten ', 'טן אנרג'], hints: ['דלק'] },
  { tokens: ['סופר פארם', 'super pharm', 'ניו פארם', 'be pharm', 'בי פארם', 'pharm'], hints: ['בית מרקחת', 'מרקחת'] },
  { tokens: ['זארה', 'zara', 'קסטרו', 'castro', 'פוקס', ' fox', 'h&m', 'רנואר', 'renuar', 'גולף', 'טרמינל x', 'american eagle', 'ביגוד'], hints: ['ביגוד'] },
  { tokens: ['רב קו', 'רב-קו', 'רבקו', 'אגד', 'gett', 'get taxi', 'uber', 'אובר', 'גט', 'מונית', 'רכבת ישראל'], hints: ['נסיעות', 'רב-קו', 'רב קו'] },
  { tokens: ['עמלה', 'עמלת', 'ריבית', 'דמי ניהול', 'דמי כרטיס', 'fee', 'interest', 'finance charge', 'תשלום מינימום'], hints: ['אשראי מתגלגל', 'עמלות', 'ריבית'] },
  { tokens: ['aliexpress', 'עלי אקספרס', 'amazon', 'אמזון', 'ebay', 'shein', 'שיין', 'zap', 'ksp online'], hints: ['קניות ברשת', 'קניות'] },
  { tokens: ['ניו פארם קוסמטיקס', 'sephora', 'ספורה', 'קוסמטיקה', 'איפור'], hints: ['טיפוח', 'איפור'] },
];

function findCategoryByHints(hints) {
  const all = [
    ...data.fixed.map(c => ({ type: 'fixed', item: c })),
    ...data.variable.map(c => ({ type: 'variable', item: c })),
    ...data.funds.map(c => ({ type: 'fund', item: c })),
  ];
  for (const hint of hints) {
    const found = all.find(c => c.item.name.toLowerCase().includes(hint.toLowerCase()));
    if (found) return found.type + ':' + found.item.id;
  }
  return null;
}

// Returns { key: "type:id", confidence: 'history' | 'guess' } or null.
function guessCategoryForDesc(desc) {
  const norm = (desc || '').trim().toLowerCase();
  if (!norm) return null;

  // 1) highest confidence: matches something the user already confirmed manually before
  for (const key of Object.keys(data.keywordMap)) {
    const words = data.keywordMap[key] || [];
    if (words.some(w => w && norm.includes(w.toLowerCase()))) return { key, confidence: 'history' };
  }

  // 2) built-in generic knowledge — a guess, needs the user's confirmation
  for (const rule of BUILT_IN_RULES) {
    if (rule.tokens.some(t => norm.includes(t.toLowerCase()))) {
      const key = findCategoryByHints(rule.hints);
      if (key) return { key, confidence: 'guess' };
    }
  }
  return null;
}

const importFileInput = document.getElementById('importExpFile');
const importMapArea = document.getElementById('importMapArea');
const importPreviewArea = document.getElementById('importPreviewArea');

importFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const isCsv = /\.csv$/i.test(file.name);
  const reader = new FileReader();
  reader.onload = () => {
    try {
      if (isCsv) {
        importRawRows = parseCsv(reader.result);
      } else {
        const wb = XLSX.read(reader.result, { type: 'array', cellDates: true });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        importRawRows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: '' });
      }
      startColumnMapping();
    } catch (err) {
      alert('לא הצלחתי לקרוא את הקובץ. ודא שזהו קובץ Excel/CSV תקין.');
    }
  };
  if (isCsv) reader.readAsText(file, 'UTF-8');
  else reader.readAsArrayBuffer(file);
});

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
  return lines.map(line => {
    const cells = [];
    let cur = '', inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { inQuotes = !inQuotes; }
      else if (c === ',' && !inQuotes) { cells.push(cur); cur = ''; }
      else { cur += c; }
    }
    cells.push(cur);
    return cells.map(c => c.trim());
  });
}

function startColumnMapping() {
  if (importRawRows.length < 2) {
    alert('הקובץ ריק או לא מכיל מספיק שורות.');
    return;
  }
  importHeaders = importRawRows[0].map(h => String(h || '').trim());
  const dateIdx = guessColumnIndex(importHeaders, DATE_HINTS);
  const descIdx = guessColumnIndex(importHeaders, DESC_HINTS);
  const amountIdx = guessColumnIndex(importHeaders, AMOUNT_HINTS);

  const optionsHtml = importHeaders.map((h, i) => `<option value="${i}">${escapeHtml(h || ('עמודה ' + (i + 1)))}</option>`).join('');
  const mapDate = document.getElementById('mapDate');
  const mapDesc = document.getElementById('mapDesc');
  const mapAmount = document.getElementById('mapAmount');
  mapDate.innerHTML = optionsHtml;
  mapDesc.innerHTML = optionsHtml;
  mapAmount.innerHTML = optionsHtml;
  mapDate.value = dateIdx >= 0 ? dateIdx : 0;
  mapDesc.value = descIdx >= 0 ? descIdx : Math.min(1, importHeaders.length - 1);
  mapAmount.value = amountIdx >= 0 ? amountIdx : importHeaders.length - 1;

  importMapArea.classList.remove('hidden');
  importPreviewArea.classList.add('hidden');
}

document.getElementById('buildPreviewBtn').addEventListener('click', () => {
  const dIdx = parseInt(document.getElementById('mapDate').value, 10);
  const descIdx = parseInt(document.getElementById('mapDesc').value, 10);
  const aIdx = parseInt(document.getElementById('mapAmount').value, 10);

  pendingImportRows = importRawRows.slice(1)
    .map(r => {
      const desc = String(r[descIdx] || '').trim();
      const amount = parseAmountCell(r[aIdx]);
      const date = parseDateCell(r[dIdx]);
      const guessed = guessCategoryForDesc(desc);
      const [catType, catId] = guessed ? guessed.key.split(':') : ['', ''];
      const confidence = guessed ? guessed.confidence : null;
      return { date, desc, amount, catType, catId, confidence, skip: false };
    })
    .filter(r => r.amount > 0);

  if (pendingImportRows.length === 0) {
    alert('לא נמצאו שורות עם סכום תקין. בדוק את מיפוי העמודות.');
    return;
  }
  renderImportPreview();
  importMapArea.classList.add('hidden');
  importPreviewArea.classList.remove('hidden');
});

const CONFIDENCE_BADGE = {
  history: '<span class="import-badge history">✓ לפי היסטוריה</span>',
  guess: '<span class="import-badge guess">🤖 ניחוש — נא לאשר</span>',
  confirmed: '<span class="import-badge confirmed">✓ נבחר ידנית</span>',
};

function renderImportPreview() {
  const list = document.getElementById('importPreviewList');
  list.innerHTML = '';
  const matched = pendingImportRows.filter(r => r.catType).length;
  const guesses = pendingImportRows.filter(r => r.confidence === 'guess').length;
  const summary = document.createElement('div');
  summary.className = 'import-summary';
  summary.textContent = `${pendingImportRows.length} שורות נמצאו · ${matched} שויכו לקטגוריה` +
    (guesses ? ` (${guesses} מהן ניחוש של המערכת — כדאי לבדוק) ` : ' ') +
    `· סמן "דלג" על שורות שלא רוצים לייבא, ובחר קטגוריה לשורות ללא שיוך.`;
  list.appendChild(summary);

  pendingImportRows.forEach((row, idx) => {
    const el = document.createElement('div');
    el.className = 'import-row' + (row.skip ? ' skipped' : '');
    const catValue = row.catType ? row.catType + ':' + row.catId : '';
    const badge = row.confidence ? CONFIDENCE_BADGE[row.confidence] : '';
    el.innerHTML = `
      <div class="import-row-top">
        <span class="import-row-desc">${escapeHtml(row.desc || '(ללא תיאור)')}</span>
        <span class="import-row-meta">${row.date} · ${fmtNum(row.amount)} ₪</span>
      </div>
      ${badge}
      <div class="import-row-bottom">
        <select data-idx="${idx}" class="import-row-cat">${categoryOptionsHTML(catValue, true)}</select>
        <button type="button" class="import-row-skip" data-idx="${idx}">${row.skip ? 'בוטל' : 'דלג'}</button>
      </div>
    `;
    list.appendChild(el);
  });

  list.querySelectorAll('.import-row-cat').forEach(sel => {
    sel.addEventListener('change', () => {
      const idx = parseInt(sel.dataset.idx, 10);
      const [t, id] = sel.value ? sel.value.split(':') : ['', ''];
      pendingImportRows[idx].catType = t;
      pendingImportRows[idx].catId = id;
      pendingImportRows[idx].confidence = t ? 'confirmed' : null; // user took over — no longer just a guess
      renderImportPreview();
    });
  });
  list.querySelectorAll('.import-row-skip').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      pendingImportRows[idx].skip = !pendingImportRows[idx].skip;
      renderImportPreview();
    });
  });
}

document.getElementById('confirmImportBtn').addEventListener('click', () => {
  let imported = 0, skippedNoCat = 0;
  pendingImportRows.forEach(row => {
    if (row.skip) return;
    if (!row.catType || !row.catId) { skippedNoCat++; return; }
    data.expenses.push({ id: uid(), date: row.date, catType: row.catType, catId: row.catId, amount: row.amount, business: row.desc, note: '' });
    // learn: remember this description under the chosen category for next time
    const key = row.catType + ':' + row.catId;
    if (!data.keywordMap[key]) data.keywordMap[key] = [];
    const normDesc = row.desc.trim().toLowerCase();
    if (normDesc && !data.keywordMap[key].includes(normDesc)) data.keywordMap[key].push(normDesc);
    imported++;
  });
  save();
  resetImportUI();
  renderAll();
  alert(`יובאו ${imported} הוצאות.` + (skippedNoCat ? ` ${skippedNoCat} שורות דולגו כי לא נבחרה להן קטגוריה.` : ''));
});

document.getElementById('cancelImportBtn').addEventListener('click', resetImportUI);

function resetImportUI() {
  importRawRows = [];
  importHeaders = [];
  pendingImportRows = [];
  importFileInput.value = '';
  importMapArea.classList.add('hidden');
  importPreviewArea.classList.add('hidden');
}

/* ===== Budget setup view ===== */

function renderBudgetView() {
  document.getElementById('incomeInput').value = data.income;

  renderEditList('fixedEditList', data.fixed, false);
  renderEditList('varEditList', data.variable, false);
  renderFundEditList();
  renderBudgetSummary();
}

function renderBudgetSummary() {
  const income = data.income;
  const fixed = fixedTotal();
  const variable = variableTotal();
  const funds = fundsMonthlyTotal();
  const planned = fixed + variable + funds;
  const balance = income - planned;

  document.getElementById('budgetSumIncome').textContent = fmt(income);
  document.getElementById('budgetSumPlanned').textContent = fmt(planned);
  const balEl = document.getElementById('budgetSumBalance');
  balEl.textContent = fmt(balance);
  balEl.style.color = balance < 0 ? 'var(--danger)' : 'var(--good)';

  const pct = income > 0 ? (planned / income) * 100 : 0;
  const bar = document.getElementById('budgetAllocBar');
  bar.style.width = Math.min(100, pct) + '%';
  bar.className = 'progress-inner' + (pct > 100 ? ' over' : pct > 90 ? ' warn' : '');

  const note = document.getElementById('budgetSumNote');
  if (income > 0) {
    note.textContent = balance < 0
      ? `התכנון חורג מההכנסה ב-${fmtNum(Math.abs(balance))} ₪ — כדאי לצמצם קטגוריה כלשהי.`
      : `${fmtNum(pct)}% מההכנסה מתוכננים. נשארים ${fmtNum(balance)} ₪ שלא הוקצו.`;
    note.style.color = balance < 0 ? 'var(--danger)' : '';
  } else {
    note.textContent = 'הזן הכנסה חודשית כדי לראות את התמונה המלאה.';
    note.style.color = '';
  }

  const breakdown = document.getElementById('budgetBreakdown');
  breakdown.innerHTML = `
    <div class="budget-breakdown-row"><span>הוצאות קבועות</span><span>${fmt(fixed)}</span></div>
    <div class="budget-breakdown-row"><span>קטגוריות משתנות (יעד)</span><span>${fmt(variable)}</span></div>
    <div class="budget-breakdown-row"><span>הפרשות לקרנות שנתיות</span><span>${fmt(funds)}</span></div>
  `;
}

function renderEditList(containerId, arr, isFund) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  if (arr.length === 0) {
    el.innerHTML = '<p class="empty-note">אין פריטים עדיין.</p>';
  }
  arr.forEach(item => {
    const row = document.createElement('div');
    row.className = 'edit-row';
    row.innerHTML = `
      <input type="text" value="${escapeHtml(item.name)}" data-field="name" data-id="${item.id}">
      <input type="number" value="${item.amount}" data-field="amount" data-id="${item.id}">
      <button class="remove-btn" data-id="${item.id}">✕</button>
    `;
    el.appendChild(row);
  });
  el.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('change', () => {
      const item = arr.find(x => x.id === inp.dataset.id);
      if (!item) return;
      if (inp.dataset.field === 'name') item.name = inp.value;
      else item.amount = parseFloat(inp.value) || 0;
      save();
      renderAll();
    });
  });
  el.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = arr.findIndex(x => x.id === btn.dataset.id);
      if (idx >= 0) arr.splice(idx, 1);
      save();
      renderAll();
    });
  });
}

function renderFundEditList() {
  const el = document.getElementById('fundEditList');
  el.innerHTML = '';
  if (data.funds.length === 0) {
    el.innerHTML = '<p class="empty-note">אין קרנות עדיין.</p>';
  }
  data.funds.forEach(f => {
    const row = document.createElement('div');
    row.className = 'fund-edit-row';
    const monthOptions = HEB_MONTHS.map((m, i) =>
      `<option value="${i + 1}" ${f.month === i + 1 ? 'selected' : ''}>${m}</option>`
    ).join('');
    row.innerHTML = `
      <div class="fund-edit-top">
        <input type="text" value="${escapeHtml(f.name)}" data-field="name" data-id="${f.id}">
        <button class="remove-btn" data-id="${f.id}">✕</button>
      </div>
      <div class="fund-edit-grid">
        <label class="muted">יעד שנתי (₪)
          <input type="number" value="${f.annualTarget}" data-field="annualTarget" data-id="${f.id}">
        </label>
        <label class="muted">חודש ההוצאה
          <select data-field="month" data-id="${f.id}">${monthOptions}</select>
        </label>
      </div>
      <span class="muted">הפרשה חודשית: ${fmtNum(fundMonthlyShare(f))} ₪</span>
    `;
    el.appendChild(row);
  });
  el.querySelectorAll('input, select').forEach(inp => {
    inp.addEventListener('change', () => {
      const item = data.funds.find(x => x.id === inp.dataset.id);
      if (!item) return;
      const field = inp.dataset.field;
      if (field === 'name') item.name = inp.value;
      else if (field === 'annualTarget') item.annualTarget = parseFloat(inp.value) || 0;
      else if (field === 'month') item.month = parseInt(inp.value, 10);
      save();
      renderAll();
    });
  });
  el.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = data.funds.findIndex(x => x.id === btn.dataset.id);
      if (idx >= 0) data.funds.splice(idx, 1);
      save();
      renderAll();
    });
  });
}

document.getElementById('incomeInput').addEventListener('change', (e) => {
  data.income = parseFloat(e.target.value) || 0;
  save();
  renderAll();
});

document.getElementById('addFixedBtn').addEventListener('click', () => {
  data.fixed.push({ id: uid(), name: 'הוצאה קבועה חדשה', amount: 0 });
  save();
  renderAll();
});
document.getElementById('addVarBtn').addEventListener('click', () => {
  data.variable.push({ id: uid(), name: 'קטגוריה חדשה', amount: 0 });
  save();
  renderAll();
});
document.getElementById('addFundBtn').addEventListener('click', () => {
  data.funds.push({ id: uid(), name: 'קרן חדשה', annualTarget: 0, month: 1, startMonth: monthKey(new Date()) });
  save();
  renderAll();
});

/* ===== Annual detail view ===== */

function renderAnnualView() {
  const el = document.getElementById('annualDetail');
  el.innerHTML = '';
  const cmKey = monthKey(new Date());
  const curMonthNum = new Date().getMonth() + 1;
  if (data.funds.length === 0) {
    el.innerHTML = '<p class="empty-note">אין קרנות שנתיות מוגדרות.</p>';
    return;
  }
  data.funds
    .slice()
    .sort((a, b) => a.month - b.month)
    .forEach(f => {
      const saved = fundSaved(f, cmKey);
      const share = fundMonthlyShare(f);
      const isThisMonth = f.month === curMonthNum;
      const card = document.createElement('div');
      card.className = 'annual-card';
      card.innerHTML = `
        <div class="annual-top">
          <span class="fund-name">${escapeHtml(f.name)}</span>
          <span class="fund-month">${HEB_MONTHS[f.month - 1]}${isThisMonth ? ' ⭐ החודש' : ''}</span>
        </div>
        <div class="progress-outer">
          <div class="progress-inner ${saved < 0 ? 'over' : ''}" style="width:${Math.max(0, Math.min(100, (saved / f.annualTarget) * 100))}%"></div>
        </div>
        <div class="annual-nums">
          <span>נצבר: ${fmtNum(saved)} ₪</span>
          <span>יעד: ${fmtNum(f.annualTarget)} ₪</span>
          <span>הפרשה חודשית: ${fmtNum(share)} ₪</span>
        </div>
      `;
      el.appendChild(card);
    });
}

/* ===== Settings: export / import / reset ===== */

document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `family-budget-backup-${todayStr()}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('importFile').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      data = parsed;
      save();
      renderAll();
      alert('הנתונים יובאו בהצלחה');
    } catch (err) {
      alert('קובץ לא תקין');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('לאפס את כל הנתונים? פעולה זו לא ניתנת לביטול.')) {
    data = defaultData();
    save();
    renderAll();
  }
});

/* ===== Tab navigation ===== */

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById('view-' + tab.dataset.view).classList.remove('hidden');
  });
});

document.getElementById('menuBtn').addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.tab[data-view="settings"]').classList.add('active');
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById('view-settings').classList.remove('hidden');
});

/* ===== Init ===== */

document.getElementById('expDate').value = todayStr();
renderAll();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
