import 'regenerator-runtime'
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')

if (workbox) { console.log('Workbox berhasil dimuat') } else {
  console.log('Workbox gagal dimuat')
}

workbox.routing.registerRoute(
  new RegExp('https://restaurant-api.dicoding.dev/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'resource',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10
      })
    ]
  })
)

const newLocal = 'https://use.fontawesome.com/'
workbox.routing.registerRoute(
  new RegExp(newLocal),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'font-awesome',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10
      })
    ]
  })
)

workbox.routing.registerRoute(
  // eslint-disable-next-line prefer-regex-literals
  new RegExp('/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'pages',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10
      })
    ]
  })
)
