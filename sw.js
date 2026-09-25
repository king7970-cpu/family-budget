const CACHE_NAME = 'family-budget-v18';
const ASSETS = [
  './', './index.html', './style.css?v=4', './app.js?v=9', './manifest.json', './icon.svg', './vendor/xlsx.full.min.js',
  './add.html', './add.js?v=5', './add-manifest.json',
  './add-kids.html', './add-kids-manifest.json',
  './firebase-config.js?v=1',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first: always try to get the freshest file first (so a new deploy
// shows up the moment you reload — no "stuck on an old version" surprises).
// Only falls back to the cached copy if the network request fails (offline).
//
// IMPORTANT: only handle requests to OUR OWN origin. Firebase/Firestore makes
// its own cross-origin requests (auth, sync channel, gstatic SDK) — letting
// this service worker intercept and re-cache those would break real-time
// sync, so those pass straight through untouched.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
