class Basket {
  constructor() {
    this.price = 0
    this.discount = 0
  }

  getTotalPrice() {
    return Number((this.price - this.discount).toPrecision(3));
  }

  add(item) {
    this.price += item.getPrice()
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

}



module.exports = Basket