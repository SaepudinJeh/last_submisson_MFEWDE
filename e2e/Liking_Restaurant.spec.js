const assert = require('assert')

Feature('Liking Restaurant')

Scenario('Liking one menu Restaurant', async (I) => {
  I.amOnPage('/#/menu-list')
  I.seeElement('.card-info a')

  const firstMenuRestaurant = locate('.card-info a').first()
  const firstMenuRestaurantName = await I.grabTextFrom(firstMenuRestaurant)
  I.click(firstMenuRestaurantName)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.cards')
  const likedRestaurantName = await I.grabTextFrom('.card-info a')
  I.click(firstMenuRestaurantName)

  assert.strictEqual(firstMenuRestaurantName, likedRestaurantName)
})

Scenario('Unliking one menu Restaurant', async (I) => {
  I.amOnPage('/#/menu-list')
  I.seeElement('.card-info a')

  const firstMenuRestaurant = locate('.card-info a').first()
  const firstMenuRestaurantName = await I.grabTextFrom(firstMenuRestaurant)
  I.click(firstMenuRestaurantName)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.cards')
  const likedRestaurantName = await I.grabTextFrom('.card-info a')
  I.click(firstMenuRestaurantName)

  assert.strictEqual(firstMenuRestaurantName, likedRestaurantName)

  I.seeElement('#likeButton')
  I.click('#likeButton')
  pause()
})
