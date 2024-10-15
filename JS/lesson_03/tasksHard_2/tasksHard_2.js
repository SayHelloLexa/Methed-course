'use strict';

let incomeSum = Number(prompt('Введите сумму дохода', [0]));
let taxSum;

if (Number.isNaN(incomeSum)) {
  console.log('Вы ввели некорректные данные');
} else if (incomeSum <= 15000) {
  taxSum = incomeSum * 0.13;
} else if (incomeSum <= 50000) {
  taxSum = 15000 * 0.13 + (incomeSum - 15000) * 0.2;
} else taxSum =  15000 * 0.13 + (50000 - 15000) * 0.2 + (incomeSum - 50000) * 0.3;

console.log(taxSum);