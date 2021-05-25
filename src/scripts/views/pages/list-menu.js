import TheCulinarySource from "../../data/theculinary-source";
import { createCulinaryTemplate} from "../templates/templates-creator";

const MenuList = {
    async render() {
        return `
            <div class="card-list"></civ>
        `;
    },

    async afterRender() {
        const culinarys = await TheCulinarySource.listMenu();
        const culinaryContainer = document.querySelector(".card-list");
        
        culinarys.forEach(culinary => {
            culinaryContainer.innerHTML += createCulinaryTemplate(culinary);
        });
    },
};

export default MenuList;