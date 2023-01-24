const Basket = require("./basket")
const candyDbl1 = {getName: () => 'Mars', getPrice: () => 3.99}
const candyDbl2 = {getName: () => 'Skittles', getPrice: () => 1.99}

let basket

beforeEach(() => {
  basket = new Basket
})

test('getTotalPrice returns 0 for a new basket', () => {
  expect(basket.getTotalPrice()).toBe(0)
})

test('Items can be added to basket and price is updated', () => {
  basket.add(candyDbl1)
  expect(basket.getTotalPrice()).toBe(3.99)
  basket.add(candyDbl2)
  expect(basket.getTotalPrice()).toBe(5.98)
})