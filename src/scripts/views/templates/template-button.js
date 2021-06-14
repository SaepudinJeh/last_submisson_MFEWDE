const createLikeButtonTemplate = () => `
  <button aria-label="like this menu" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this menu" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
