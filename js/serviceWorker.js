const data = "token-data-site-v1";
const assets = ["/", "../data.html"];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(data).then((cache) => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
