// Service worker so Body Time still opens in flight with no network.
// Network first (so updates show up when online), falling back to the cached copy.
const CACHE = 'bodytime-v1';
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['./', 'index.html', 'airports.js'])));
    self.skipWaiting();
});

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
    event.respondWith(fromNetwork(request).catch(() =>
        caches.match(request, { ignoreSearch: true }).then(cached => cached || fetch(request))));
});

function fromNetwork(request) {
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), NETWORK_TIMEOUT_MS));
    return Promise.race([fetch(request), timeout]).then(response => {
        // In-flight Wi-Fi often redirects to a login page; don't treat that as the real file.
        if (!response.ok || response.redirected) throw new Error('unusable response');
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(request, copy));
        return response;
    });
}
