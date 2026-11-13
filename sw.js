// Kühlfach – Service Worker
// Speichert nur die App-Dateien zwischen, damit die App offline läuft.
// Es werden KEINE Nutzerdaten gesendet: alle Eingaben bleiben im Speicher des Geräts.
// Bei jedem Update der App: VERSION erhöhen, dann holen sich die Geräte die neue Version.
const VERSION = "kuehlfach-v2";
const FILES = ["./", "index.html", "manifest.webmanifest", "datenschutz.html",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-192.png", "icons/icon-maskable-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // Zuerst aus dem Zwischenspeicher – die App startet sofort und auch ohne Internet.
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match("index.html"))));
});
