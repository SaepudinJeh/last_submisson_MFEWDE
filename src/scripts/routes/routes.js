import MenuList from '../views/pages/list-menu'
import DetailMenu from '../views/pages/detail-menu'
import FavoriteMenu from '../views/pages/favorite-menu'

const routes = {
  '/': MenuList,
  '/menu-list': MenuList,
  '/detail-menu/:id': DetailMenu,
  '/favorite': FavoriteMenu
}

export default routes
