const CACHE_NAME = "all-card-shell-v2";
const CORE = ["./", "./index.html", "./manifest.json", "./favicon.png", "./assets/icons/icon-192.png", "./assets/icons/icon-512.png", "./assets/icons/icon-512-maskable.png"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", event => { const req = event.request; if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return; event.respondWith(fetch(req).then(res => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, copy)); } return res; }).catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))); });
