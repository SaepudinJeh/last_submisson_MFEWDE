import FavoriteMenuIdb from "../data/idb";
import { createLikedButtonTemplate, createLikeButtonTemplate} from "../views/templates/template-button";

const LikeButtonInitiator = {
    async init({ likeButtonContainer, menu}) {
        this._likeButtonContainer = likeButtonContainer;
        this._menu = menu;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._menu;
        
        if (await this._isMovieExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isMovieExist(id) {
        const menu = await FavoriteMenuIdb.getMenu(id);
        return !!menu;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
     
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
          await FavoriteMenuIdb.putMenu(this._menu);
          this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
     
        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
          await FavoriteMenuIdb.deleteMenu(this._menu.id);
          this._renderButton();
        });
    },
};

export default LikeButtonInitiator;