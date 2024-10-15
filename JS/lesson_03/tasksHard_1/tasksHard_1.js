'use strict';

let incomeSum = Number(prompt('Введите сумму дохода', [0]));
let taxSum;

if (Number.isNaN(incomeSum)) {
  console.log('Вы ввели некорректные данные');
} else if (incomeSum > 50000) {
  taxSum = incomeSum * 0.3;
} else if (15000 >= incomeSum < 50000) {
  taxSum = incomeSum * 0.2;
} else taxSum = incomeSum * 0.13;

console.log(taxSum);