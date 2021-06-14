import { openDB } from 'idb'
import CONFIG from '../globals/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})

const FavoriteMenuIdb = {
  async getMenu (id) {
    if (!id) {
      return
    }

    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },

  async getAllMenu () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },

  async putMenu (menu) {
    // eslint-disable-next-line no-prototype-builtins
    if (!menu.hasOwnProperty('id')) {
      return
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, menu)
  },

  async deleteMenu (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavoriteMenuIdb
