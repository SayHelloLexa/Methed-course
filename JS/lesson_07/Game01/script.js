'use strict';

const hiddenNumber = Math.floor(Math.random() * 100 + 1);
let answer = +prompt('Угадай число от 1 до 100');

while (answer !== hiddenNumber) {
  if (answer > hiddenNumber) {
    alert('Меньше!');
    answer = +prompt('Угадай число от 1 до 100', [1]);
  } else if (answer < hiddenNumber) {
    alert('Больше!');
    answer = +prompt('Угадай число от 1 до 100', [1]);
  }
}

alert('Правильно');