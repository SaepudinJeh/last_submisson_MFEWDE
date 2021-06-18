import TheCulinarySource from '../../data/theculinary-source'
import { createCulinaryTemplate } from '../templates/templates-creator'

const MenuList = {
  async render () {
    return `
            <div class="hero-container">
                <figure class="hero-image">
                  <picture>
                    <source media="(max-width: 600px)" data-srcset="images/hero-image-small.jpg" data-sizes="auto" class="lazyload">
                    <img class="lazyload" data-src="images/hero-image-large.jpg" alt="image-hero">
                  </picture>
                  <figcaption>
                    <h1>Makan-makan Apps</h1>
                    <h2>Makan sesukannya, bayar sesukannya</h2>
                  </figcaption>
                </figure>
            </div>

            <h1 id="heading-menu">Semua menu</h1>
            <div id="card-list"></div>
        `
  },

  async afterRender () {
    const culinarys = await TheCulinarySource.listMenu()
    const culinaryContainer = document.querySelector('#card-list')

    culinarys.forEach(culinary => {
      culinaryContainer.innerHTML += createCulinaryTemplate(culinary)
    })
  }
}

export default MenuList
