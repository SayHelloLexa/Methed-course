'use strict';

let randomNumbersArr = (i, n, m, type) => {
  let arr = Array(i);
  let min = (n > m) ? m : n;
  let max = (n > m) ? n : m;
  let initedArr = [...arr].map(item => item = Math.floor(Math.random() * (max - min + 1)) + min);

  if (type === 'even') {
    initedArr = initedArr.filter(item => item % 2 === 0);
  } else if (type === 'odd') {
    initedArr = initedArr.filter(item => item % 2 !== 0);
  }

  return initedArr;
}

console.log(randomNumbersArr(10, 1, 10, 'even'));
console.log(randomNumbersArr(10, 1, 10, 'odd'));