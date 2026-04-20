const CACHE_NAME = 'clearbank-v1';

// Install the service worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate and claim clients
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Chrome strictly REQUIRES a fetch handler to trigger the PWA install prompt!
self.addEventListener('fetch', (event) => {
    // This simple network-first setup satisfies Chrome's requirement
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response("You are currently offline.");
        })
    );
});