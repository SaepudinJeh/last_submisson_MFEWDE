import TheCulinarySource from "../../data/theculinary-source";
import { createCulinaryTemplate} from "../templates/templates-creator";

const MenuList = {
    async render() {
        return `
            <div class="hero-container">
                <figure class="hero-image">
                    <img src="images/hero-image.jpg" >
                    <h1>Makan-makan Apps</h1>
                    <h2>Makan sesukannya, bayar sesukannya</h2>
                </figure>
            </div>
            <h1 class="heading-menu">Semua menu</h1>
            <div class="card-list"></div>
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