const CACHE_NAME = 'todo-cache-v1';
const urlsToCache = [
  '/To-do-List/',
  '/To-do-List/index.html',
  // 아래에 실제 사용 중인 css, js 파일 경로를 적어주세요.
  // 예: '/To-do-List/style.css',
  // 예: '/To-do-List/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});