const DrawerInitiator = {
    init({menuButton, closeButton, menuList, menuContent}) {

        menuButton.addEventListener("click", () => {
            this._toggleDrawer(menuList, closeButton)
        });

        closeButton.addEventListener("click", () => {
            this._closeDrawer(menuList, closeButton)
        });

        menuContent.addEventListener("click", () => {
            this._closeDrawer(menuList, closeButton)
        })
    },

    _toggleDrawer( menuList, menuBtn) {
        menuList.classList.add("active");
        menuBtn.classList.add("hidden");
    },

    _closeDrawer( menuList, menuBtn) {
        menuList.classList.remove("active");
        menuBtn.classList.remove("hidden");
    }

};

export default DrawerInitiator;