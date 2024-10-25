'use strict';

let typeOfAnswer = () => {
  while (Number.isNaN(+answer)) {
    alert('Введи число!');
    answer = prompt('Угадай число от 1 до 100');
  }
}

const hiddenNumber = Math.floor(Math.random() * 100) + 1;
let answer = prompt('Угадай число от 1 до 100');

if (answer === null) {
  alert('Игра окончена.');
} else {
  typeOfAnswer();
  
  while (+answer !== hiddenNumber) {
    if (answer === null) {
      alert('Игра окончена.');
      break;
    }
  
    if (+answer > hiddenNumber) {
      alert('Меньше!');
      answer = prompt('Угадай число от 1 до 100');
      typeOfAnswer();
    } else if (+answer < hiddenNumber) {
      alert('Больше!');
      answer = prompt('Угадай число от 1 до 100');
      typeOfAnswer();
    }
  }

  if (+answer === hiddenNumber) {
    alert('Правильно!'); 
  }
}