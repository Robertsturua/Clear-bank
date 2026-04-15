// public/sw.js
const cacheName = 'clearbank-v1';

// Chrome requires a fetch event listener to trigger the Install prompt
self.addEventListener('fetch', (event) => {
  // We just let the browser do its normal network request
  event.respondWith(fetch(event.request).catch(() => {
    // Optional: Return offline fallback page here later
  }));
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Clear.Bank Service Worker Installed');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});