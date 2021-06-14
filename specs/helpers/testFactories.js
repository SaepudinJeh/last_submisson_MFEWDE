import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator'

const createLikeButtonPresenter = async (menu) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    menu
  })
}

export { createLikeButtonPresenter }
