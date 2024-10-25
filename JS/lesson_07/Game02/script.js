'use strict';

let typeOfAnswer = () => {
  while (Number.isNaN(+answer)) {
    alert('Введи число!');
    answer = prompt(`Угадай число от ${(+n > +m) ? +m : +n} до ${(+n > +m) ? +n : +m}`);
  }
}

let isRangeNumberNull = () => {
  if (n === null || m === null) {
    return true;
  }

  return false;
}

let setHiddenNumber = (n, m) => {
  const min = (+n > +m) ? +m : +n;
  const max = (+n > +m) ? +n : +m;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const n = prompt('Введите первое число диапазона:');
const m = prompt('Введите второе число диапазона:');
const hiddenNumber = setHiddenNumber(n, m);
let answer = prompt(`Угадай число от ${(+n > +m) ? +m : +n} до ${(+n > +m) ? +n : +m}`);
const rememberedNumbers = [];

typeOfAnswer();

rememberedNumbers.push(+answer);

console.log(rememberedNumbers);



// if (answer === null) {
//   alert('Игра окончена.');
// } else {
//   typeOfAnswer();
  
//   while (+answer !== hiddenNumber) {
//     if (answer === null) {
//       alert('Игра окончена.');
//       break;
//     }
  
//     if (+answer > hiddenNumber) {
//       alert('Меньше!');
//       answer = prompt('Угадай число от 1 до 100');
//       typeOfAnswer();
//     } else if (+answer < hiddenNumber) {
//       alert('Больше!');
//       answer = prompt('Угадай число от 1 до 100');
//       typeOfAnswer();
//     }
//   }

//   if (+answer === hiddenNumber) {
//     alert('Правильно!'); 
//   }
// }