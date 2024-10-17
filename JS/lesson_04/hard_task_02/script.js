'use string';

let minNumber = (a, b) => {
  return (a + b - Math.abs(a - b)) / 2;
}

console.log('Минимальное число: ' + minNumber(5, 6));
console.log('Минимальное число: ' + minNumber(1000, 1100));