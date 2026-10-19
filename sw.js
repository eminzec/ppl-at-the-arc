// Offline support. The page comes from the network when there is one, so new deploys show up,
// and from the cache when the gym Wi-Fi is down.
const CACHE = "ppl-v1";
const CORE = ["./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png", "./icons/apple-touch-icon.png"];

function cacheResponse(request, response) {
  if (response.ok) {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(request, copy));
  }
  return response;
}

/** Saves the page plus the scripts and styles it loads, so the very first visit already works offline. */
async function precache() {
  const cache = await caches.open(CACHE);
  const page = await fetch("./", { cache: "no-cache" });
  const html = await page.clone().text();
  const assets = [...html.matchAll(/(?:src|href)="(\.\/assets\/[^"]+)"/g)].map((match) => match[1]);
  await cache.put("./", page);
  await cache.addAll([...CORE, ...assets]);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => cacheResponse("./", response))
        .catch(() => caches.match("./")),
    );
    return;
  }

  // Built files have a content hash in their name, so a cached copy is never out of date.
  // ignoreVary: a server's "Vary: Origin" would otherwise make the page's module-script request
  // miss the copy saved during install, which was fetched without an Origin header.
  event.respondWith(caches.match(request, { ignoreVary: true }).then((cached) => cached ?? fetch(request).then((response) => cacheResponse(request, response))));
});
