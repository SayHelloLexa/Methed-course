'use strict';

const leapYears = (n, m) => {
  let min = (Math.abs(n) > Math.abs(m)) ? Math.abs(m) : Math.abs(n);
  let max = (Math.abs(n) > Math.abs(m)) ? Math.abs(n) : Math.abs(m);
  const len = max - min + 1;
  let arr = Array(len);
  
  for (min; min <= max; min++) {
    arr.push(min);
  }

  return arr.filter(item => (item % 4 === 0 && item % 100 !== 0) || (item % 400 === 0));
}

console.log(leapYears(2000, 2032));
console.log(leapYears(2032, 2000));
console.log(leapYears(-2000, -2032));