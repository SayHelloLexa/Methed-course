'use strict';

let cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(productName, price, productCount = 1) {
    this.items.push({productName, price, productCount});
    this.increaseCount(productCount);
    this.calculateItemPrice();
  },

  increaseCount(productCount) {
    this.count += productCount;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => { 
      return acc + (item.price * item.productCount);
    }, 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items, null, 2));
    console.log(this.getTotalPrice());
  },
}

cart.add('Простокваша', 30, 5);
cart.add('Молоко', 100, 3);
cart.add('Сметана', 50, 4);

cart.print();
cart.clear();
cart.print();