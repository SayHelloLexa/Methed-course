'use strict';

const getAveragePriceGoods = (allCashbox) => {
  let countGoods = 0;
  let sum = 0;

  for (let i = 0; i < allCashbox.length; i++) {
    countGoods += allCashbox[i][0];
    sum += allCashbox[i][1];
  }

  return sum / countGoods;
}

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

console.log(getAveragePriceGoods(allCashbox));