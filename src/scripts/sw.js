import 'regenerator-runtime'
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')
// import { precacheAndRoute } from 'workbox-precaching'

workbox.precaching.precacheAndRoute(
  [
    {
      url: '/',
      revision: 1
    },
    {
      url: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap',
      revision: 1
    },
    {
      url: 'https://use.fontawesome.com/releases/v4.7.0/fonts/fontawesome-webfont.woff2',
      revision: 1
    }
  ],
  {
    ignoreURLParametersMatching: [/.*/]
  }
)

workbox.routing.registerRoute(
  // eslint-disable-next-line prefer-regex-literals
  new RegExp('/'),
  workbox.strategies.cacheFirst({
    cacheName: 'pages',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSecmaxAgeSeconds: 60 * 60 * 24 * 30 * 2
      })
    ]
  })
)

workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'fonts',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSecmaxAgeSeconds: 60 * 60 * 24 * 30 * 2
      })
    ]
  })
)

workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'resource_api',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSecmaxAgeSeconds: 60 * 60 * 24 * 30 * 2
      })
    ]
  })
)

workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://use.fontawesome.com',
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'font_awesome',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSecmaxAgeSeconds: 60 * 60 * 24 * 30 * 2
      })
    ]
  })
)
