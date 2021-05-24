import "regenerator-runtime";

import "../styles/styles.css";
import App from "./views/app";

const app = new App({
    menuButton: document.querySelector(".menu-btn"),
    closeButton: document.querySelector(".close-btn"),
    menuList: document.querySelector(".menu-list"),
    menuContent: document.querySelector("#mainContent")
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener("load", () => {
    app.renderPage();
});