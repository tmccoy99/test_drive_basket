class Basket {
  constructor() {
    this.price = 0
  }

  getTotalPrice() {
    return this.price
  }

  add(item) {
    this.price += item.getPrice()
  }

}

module.exports = Basket