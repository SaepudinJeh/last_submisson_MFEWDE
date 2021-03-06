import FavoriteMenuIdb from '../../data/idb'
import { createCulinaryTemplate } from '../templates/templates-creator'

const SearchMenu = {
  async render () {
    return `
            <h1 id="heading-menu">Menu Favorite</h1>
            <div id="card-list"></div>
        `
  },

  async afterRender () {
    const culinary = await FavoriteMenuIdb.getAllMenu()
    const culinaryContainer = document.querySelector('#card-list')
    const headingContainer = document.querySelector('#heading-menu')
    if (culinary.length === 0) {
      headingContainer.innerHTML = `
        <div class="restaurant-not-found">
          <div class="message-not-found">Tidak ada menu favorit</div>
        </div>
      `
    }
    culinary.forEach(menu => {
      culinaryContainer.innerHTML += createCulinaryTemplate(menu)
    })
  }
}

export default SearchMenu
