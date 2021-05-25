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


const createCulinaryDetailTemplate = (culinary) => `
<div class="culinary_content">
    <img class="culinary_poster" src="${CONFIG.BASE_IMG_MEDIUM + culinary.pictureId}" alt="${culinary.name}" />
    <div class="culinary_info">
        <h2 class="culinary_title">${culinary.name}</h2>
        <h4>Information :</h4>
        <h5>Kota</h5>
        <p>${culinary.city}</p>
        <h5>Alamat</h5>
        <p>${culinary.address} minutes</p>
        <h5>Rating</h5>
        <p>${culinary.rating}</p>
    </div>
</div>
<div class="culinary_description">
    <h5>Deskripsi</h5>
    <p>${culinary.description}</p>
</div>
<div class="culinary_review">
    <h5>Reviews :</h5>
    <p>${culinary.customerReviews}</p>
</div>
`;

export { createCulinaryTemplate, createCulinaryDetailTemplate };