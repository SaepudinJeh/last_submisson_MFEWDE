import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteMenuIdb from '../src/scripts/data/idb'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unliking A Menu Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteMenuIdb.putMenu({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteMenuIdb.deleteMenu(1)
  })

  // harus menampilkan widget tidak seperti saat menu restaurant disukai
  it('should display unlike widget when the menu has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      menu: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="unlike this menu"]')).toBeTruthy()
  })

  // seharusnya tidak ditampilkan seperti widget ketika menu restaurant telah disukai
  it('should not display like widget when the menu has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      menu: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="like this menu"]')).toBeFalsy()
  })

  // Seharusnya dapat menghapus menu restaurant yang disukai dari daftar
  it('should be able to remove liked menu from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      menu: {
        id: 1
      }
    })

    document.querySelector('[aria-label="unlike this menu"]').dispatchEvent(new Event('click'))

    expect(await FavoriteMenuIdb.getAllMenu()).toEqual([])
  })

  // seharusnya tidak melakukan kesalahan jika menu restaurant yang disukai tidak ada dalam list
  it('should not throw error if the unliked menu is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      menu: {
        id: 1
      }
    })

    // hapus dulu menu restaurant dari daftar yang disukai
    await FavoriteMenuIdb.deleteMenu(1)

    document.querySelector('[aria-label="unlike this menu"]').dispatchEvent(new Event('click'))

    expect(await FavoriteMenuIdb.getAllMenu()).toEqual([])
  })
})
