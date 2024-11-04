'use strict';

const getArr = (arr) => {
  const number = Math.round(Math.random() * 10);
  arr.push(number);

  if (arr.reduce((acc, number) => { return acc + number; }) >= 50){
    return arr;
  } else {
    return getArr(arr);
  }
}

console.log(getArr([]));
