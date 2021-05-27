import UrlParser from "../../routes/url-parser";
import TheCulinarySource from "../../data/theculinary-source";
import { createCostumerReviewsTemplate, createCulinaryDetailTemplate } from "../templates/templates-creator";

const DetailMenu = {
    async render() {
        return `
            <div class="culinary_container">
                <div id="culinary"></div>
                <div class="review_container">
                    <h2>Reviews</h2>
                    <div id="costumer-reviews" class="costumer_reviews"></div>
                </div>
            </div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const culinary = await TheCulinarySource.detailMenu(url.id);
        console.log(culinary);
        const culinaryContainer = document.querySelector("#culinary");
        culinaryContainer.innerHTML = createCulinaryDetailTemplate(culinary);

        const reviewContainer =  document.querySelector("#costumer-reviews");
        
        culinary.customerReviews.map(review => {
            reviewContainer.innerHTML += createCostumerReviewsTemplate(review);
        })
    },
};

export default DetailMenu;