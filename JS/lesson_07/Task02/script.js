'use strict';

let randomNumbersArr = (i, n, m) => {
  let arr = Array(i);
  let min = (n > m) ? m : n;
  let max = (n > m) ? n : m;
  let initedArr = [...arr].map(item => item = Math.floor(Math.random() * (max - min + 1)) + min);

  return initedArr;
}

console.log(randomNumbersArr(100, -1, -10));
console.log(randomNumbersArr(10, 1, 10));