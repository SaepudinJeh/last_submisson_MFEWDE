import MenuList from "../views/pages/list-menu";
import DetailMenu from "../views/pages/detail-menu";
import SearchMenu from "../views/pages/search-menu";

const routes = {
    "/": MenuList,
    "/menu-list": MenuList,
    "/detail-menu": DetailMenu,
    "/search": SearchMenu
};

export default routes;