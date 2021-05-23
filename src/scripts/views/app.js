import DrawerInitiator from "../utils/drawer-initiator";

class App {
    constructor({ menuButton, closeButton, menuList, menuContent }) {
        this._menuButton = menuButton;
        this._closeButton = closeButton;
        this._menuList = menuList;
        this._menuContent = menuContent;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            menuButton: this._menuButton,
            closeButton: this._closeButton,
            menuList: this._menuList,
            menuContent: this._menuContent,
        })
    }
};

export default App;