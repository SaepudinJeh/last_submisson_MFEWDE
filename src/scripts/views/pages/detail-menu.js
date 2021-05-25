import UrlParser from "../../routes/url-parser";
import TheCulinarySource from "../../data/theculinary-source";
import { createCulinaryDetailTemplate } from "../templates/templates-creator";

const DetailMenu = {
    async render() {
        return `
            <h2 id="culinary" class="culinary"></h2>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const culinary = await TheCulinarySource.detailMenu(url.id);
        console.log(culinary);
        const culinaryContainer = document.querySelector("#culinary");
        culinaryContainer.innerHTML = createCulinaryDetailTemplate(culinary);
    },
};

export default DetailMenu;