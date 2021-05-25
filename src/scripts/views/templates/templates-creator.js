import CONFIG from "../../globals/config";

const createCulinaryTemplate = (culinary) => `
    <div class="cards">
        <figure class="card-image">
            <img src="${CONFIG.BASE_IMG_SMALL + culinary.pictureId}" alt="${culinary.name}">
            <h5 class="badge-city">${culinary.city}</h5>
        </figure>

        <div class="card-info">
            <h3>Rating: ${culinary.rating}</h3>
            <a href="#/detail-menu/${culinary.id}">${culinary.name}</a>
            <p>${culinary.description.substring(0, 150)}</p>
        </div>
    </div>
`;

const foodLists = (culinary) => culinary.menus.foods.map(food => `<span>${food.name},</span>`).join(" ");
const drinkLists = (culinary) => culinary.menus.drinks.map(drink => `<span>${drink.name},</span>`).join(" ");

const createCulinaryDetailTemplate = (culinary) => `
<div class="culinary_content">
    <img class="culinary_poster" src="${CONFIG.BASE_IMG_MEDIUM + culinary.pictureId}" alt="${culinary.name}" />
    <div class="culinary_info">
        <h1 class="culinary_title">${culinary.name}</h1>
        <h3>Kota</h3>
        <p>${culinary.city}</p>
        <h3>Alamat</h3>
        <p>${culinary.address} minutes</p>
        <h3>Rating</h3>
        <p>${culinary.rating}</p>

        <div class="culinary_menus">
            <h3>Makanan :</h3>
            <div class="culinary_list">
                ${foodLists(culinary)}
            </div>
        </div>

        <div class="culinary_menus">
            <h3>Minuman :</h3>
            <div class="culinary_list">
                ${drinkLists(culinary)}
            </div>
        </div>
    </div>
</div>
<div class="culinary_description">
    <h2>Deskripsi</h2>
    <p>${culinary.description}</p>
</div>
`;

const createCostumerReviewsTemplate = (review) => `
    <div>
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <span>${review.date}</span>
    </div>
`;

export { createCulinaryTemplate, createCulinaryDetailTemplate, createCostumerReviewsTemplate };