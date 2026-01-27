const CACHE_NAME = "familias-ibvp-v2";

const ASSETS_TO_CACHE = [
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-1024.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Ignorar qualquer coisa que não seja http(s)
  if (!request.url.startsWith("http")) return;

  // Só GET
  if (request.method !== "GET") return;

  // (Opcional) só cachear arquivos do próprio domínio
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(request)); // sem cache
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME)
          .then((cache) => cache.put(request, clone))
          .catch((err) => {
            console.warn("Falha ao salvar no cache:", err);
          });
        return response;
      })
      .catch(() => caches.match(request))
  );
});
