'use strict';

const palindrom = (str) => {
  let strInvert = '';

  for (let i = str.length - 1; i >= 0; i--) {
    strInvert += str[i];
    console.log(i);
  }

  return strInvert;
}

console.log(palindrom('Привет мир'));