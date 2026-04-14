const CACHE_NAME = 'gebze-v1';
const ASSETS = [
  '/css/variables.css',
  '/css/reset.css',
  '/css/components.css',
  '/css/transitions.css',
  '/js/app.js',
  '/css/onboarding.css', '/js/onboarding.js',
  '/css/login.css', '/js/login.js',
  '/css/register.css', '/js/register.js',
  '/css/otp.css', '/js/otp.js',
  '/css/password-reset.css', '/js/password-reset.js',
  '/css/home.css', '/js/home.js',
  '/css/search.css', '/js/search.js',
  '/css/categories-popup.css', '/js/categories-popup.js',
  '/css/gebzem-ai.css', '/js/gebzem-ai.js',
  '/css/food-order.css', '/js/food-order.js',
  '/css/food-order-detail.css', '/js/food-order-detail.js',
  '/css/restaurant-list.css', '/js/restaurant-list.js',
  '/css/restaurant-detail.css', '/js/restaurant-detail.js',
  '/css/ads-home.css', '/js/ads-home.js',
  '/css/ad-detail.css', '/js/ad-detail.js',
  '/css/shopping.css', '/js/shopping.js',
  '/css/jobs.css', '/js/jobs.js',
  '/css/job-detail.css', '/js/job-detail.js',
  '/css/services.css', '/js/services.js',
  '/css/service-profile.css', '/js/service-profile.js',
  '/css/events.css', '/js/events.js',
  '/css/campaigns.css', '/js/campaigns.js',
  '/css/profile.css', '/js/profile.js',
  '/css/edit-profile.css', '/js/edit-profile.js',
  '/css/map.css', '/js/map.js',
  '/css/notifications.css', '/js/notifications.js',
  '/css/favorites.css', '/js/favorites.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
