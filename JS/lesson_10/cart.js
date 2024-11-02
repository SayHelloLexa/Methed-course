'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,

  add(productName, price, productCount = 1) {
    this.items.push({productName, price, productCount});
    this.increaseCount(productCount);
    this.calculateItemPrice();
  },

  increaseCount(productCount) {
    this.count += productCount;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc +
    (item.price * item.productCount), 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items, null, 2));
    console.log(this.totalPrice);
  },
};

cart.add('Простокваша', 30, 5);
cart.add('Молоко', 100, 3);
cart.add('Сметана', 50, 4);

cart.print();
cart.clear();
cart.print();
