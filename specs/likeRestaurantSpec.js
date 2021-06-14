import FavoriteMenuIdb from '../src/scripts/data/idb'

import * as TestFactories from './helpers/testFactories'

describe('Liking A Menu Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  // harus menunjukkan tombol suka ketika menu belum disukai sebelumnya
  it('should show the like button when the menu has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 })

    expect(document.querySelector('[aria-label="like this menu"]'))
      .toBeTruthy()
  })

  // tidak boleh menampilkan tombol tidak suka saat menu belum disukai sebelumnya
  it('should not show the unlike button when the menu has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this menu"]'))
      .toBeFalsy()
  })

  // seharusnya bisa menyukai menu
  it('should be able to like the menu', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const menu = await FavoriteMenuIdb.getMenu(1)

    expect(menu).toEqual({ id: 1 })

    FavoriteMenuIdb.deleteMenu(1)
  })

  // sebaiknya tidak menambahkan menu lagi ketika sudah disukai
  it('should not add a menu again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 })

    // tambahkan film dengan id ke daftar menu yang disukai
    await FavoriteMenuIdb.putMenu({ id: 1 })

    // simulasikan pengguna menekan tombol menyukai menu
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    // Tidak ada menu yang ganda
    expect(await FavoriteMenuIdb.getAllMenu()).toEqual([{ id: 1 }])

    FavoriteMenuIdb.deleteMenu(1)
  })

  // harusnya tidak menambahkan menu ketika tidak memiliki id
  it('should not add a menu when it has no id', async () => {
    await TestFactories.createLikeButtonPresenter({ })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteMenuIdb.getAllMenu()).toEqual([])
  })
})
