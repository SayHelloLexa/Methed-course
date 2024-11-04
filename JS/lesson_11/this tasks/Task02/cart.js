'use strict';

let cart = {
  items: [],
  discount: 0,
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },
  
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
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
    return this.items.reduce((acc, item) => { 
      return acc + (item.price * item.productCount); 
    }, 0) - this.items.reduce((acc, item) => {
      return acc + (item.price * item.productCount);
    }, 0) * (this.discount / 100);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items, null, 2));
    console.log(this.totalPrice);
  },
}

cart.add('Простокваша', 300, 5);
cart.add('Молоко', 500, 3);
cart.add('Сметана', 100, 4);
cart.setDiscount = 'NEWYEAR';
console.log(cart.discount);

cart.print();
cart.clear();
cart.print();
