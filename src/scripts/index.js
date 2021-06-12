import 'regenerator-runtime'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

import '../styles/styles.css'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  menuButton: document.querySelector('.menu-btn'),
  closeButton: document.querySelector('.close-btn'),
  menuList: document.querySelector('.menu-list'),
  menuContent: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
