class Basket {
  constructor() {
    this.price = 0
  }

  getTotalPrice() {
    return this.price
  }

  add(item) {
    this.price += item.price
  }

}

module.exports = Basket