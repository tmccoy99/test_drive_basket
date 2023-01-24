const Candy = require("./candy")

const candy = new Candy('Mars', 3.99)

test("getName returns name", () => {
  expect(candy.getName()).toBe('Mars')
})

test("getPrice returns price", () => {
  expect(candy.getName()).toBe(3.99)
})