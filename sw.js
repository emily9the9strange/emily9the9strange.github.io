// Nuvio – Service Worker
// Speichert nur die App-Dateien zwischen, damit die App offline läuft.
// Es werden KEINE Nutzerdaten gesendet: alle Eingaben bleiben im Speicher des Geräts.
// Bei jedem Update der App: VERSION erhöhen, dann holen sich die Geräte die neue Version.
const VERSION = "nuvio-v40";
const FILES = ["./", "index.html", "manifest.webmanifest", "datenschutz.html",
  "nuvio-192.png", "nuvio-512.png", "nuvio-maskable-192.png", "nuvio-maskable-512.png",
  "lebensmittel.js", "rezepte.js",
  "fotos/paprikahendl-knoedel.jpg", "fotos/haehnchen-suess-sauer.jpg"];

self.addEventListener("install", e => {
  // Jede Datei einzeln laden: fehlt mal eine, scheitert nicht gleich das ganze Update.
  e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(FILES.map(f => c.add(new Request(f, { cache: "reload" }))))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // Sofort aus dem Zwischenspeicher antworten (schnell & offline) und im Hintergrund die neueste
  // Version der App-Dateien holen – so kommen Änderungen an lebensmittel.js / rezepte.js beim nächsten Start an.
  e.respondWith(caches.open(VERSION).then(c => c.match(req, { ignoreSearch: true }).then(hit => {
    const net = fetch(req, { cache: "no-cache" }).then(res => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => hit || c.match("index.html"));
    if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
    return net;
  })));
});
