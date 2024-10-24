'use strict';

let randomNumbersArr = (i) => {
  let arr = Array(i);
  let initedArr = [...arr].map(item => item = Math.floor(Math.random() * 100) + 1);

  return initedArr;
}

console.log(randomNumbersArr(10));
console.log(randomNumbersArr(20));