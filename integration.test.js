const Basket = require("./basket")
const Candy = require("./candy")

const candy1 = new Candy('Mars', 4.99)
const candy2 = new Candy('Skittle', 3.99)

let basket

describe("Integration testing", () => {

  beforeEach(() => {
    basket = new Basket
  })
  
  it("Can return basket total price, which changes with items added", () => {
    expect(basket.getTotalPrice()).toBe(0)
    basket.add(candy1)
    expect(basket.getTotalPrice()).toBe(4.99)
    basket.add(candy2)
    expect(basket.getTotalPrice()).toBe(8.98)
  })

  it('Can apply discount to basket price', () => {
    basket.add(candy1)
    basket.add(candy2)
    basket.applyDiscount(5.0)
    expect(basket.getTotalPrice()).toBe(3.98)

  })
})