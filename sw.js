const CACHE_NAME = 'family-budget-v9';
const ASSETS = [
  './', './index.html', './style.css?v=2', './app.js?v=2', './manifest.json', './icon.svg', './vendor/xlsx.full.min.js',
  './add.html', './add.js?v=2', './add-manifest.json',
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
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
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
