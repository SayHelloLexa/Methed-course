'use strict';

const isPrime = (a) => {
  if (a <= 1 || !Number.isInteger(a)) {
    return false;
  } else {
    for (let b = 2; b < a; b++) {
      if (a % b === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(911));
console.log(isPrime(151));
console.log(isPrime(1987));

console.log(isPrime(-1))
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(20));
console.log(isPrime(100));