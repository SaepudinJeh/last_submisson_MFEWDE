import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

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

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        console.log(page);
        console.log(url);
        this._menuContent.innerHTML = await page.render();
        await page.afterRender();
    }
};

export default App;