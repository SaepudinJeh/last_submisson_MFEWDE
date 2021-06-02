import UrlParser from '../../routes/url-parser'
import TheCulinarySource from '../../data/theculinary-source'
import { createCostumerReviewsTemplate, createCulinaryDetailTemplate } from '../templates/templates-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const DetailMenu = {
  async render () {
    return `
            <div class="culinary_container">
                <div id="culinary">
                    <!-- Loader -->
                    <loader>
                        <span></span>
                        <span></span>
                        <span></span>
                    </loader>
                    <!-- Akhir Loader -->
                </div>

                <div class="review_container">
                    <h2>Reviews</h2>
                    <div id="costumer-reviews" class="costumer_reviews"></div>
                </div>

                <div id="likeButtonContainer"></div>
            </div>
        `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const culinary = await TheCulinarySource.detailMenu(url.id)
    const culinaryContainer = document.querySelector('#culinary')
    culinaryContainer.innerHTML = createCulinaryDetailTemplate(culinary)

    const reviewContainer = document.querySelector('#costumer-reviews')
    // eslint-disable-next-line array-callback-return
    culinary.customerReviews.map((review) => {
      reviewContainer.innerHTML += createCostumerReviewsTemplate(review)
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      menu: culinary
    })
  }
}

export default DetailMenu
