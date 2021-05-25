import API_ENDPOINT from "../globals/api-endpoint";

class TheCulinarySource {
    static async listMenu() {
        const response = await fetch(API_ENDPOINT.MENU_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailMenu(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async searchMenu() {
        const response = await fetch(API_ENDPOINT.SEARCH_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async Review() {
        const response = await fetch(API_ENDPOINT.REVIEW);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
}

export default TheCulinarySource; 