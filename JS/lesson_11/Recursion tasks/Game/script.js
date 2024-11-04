'use strict';

const checkAnswer = (hiddenNumber) => {
  const answer = prompt('Угадай число от 1 до 100');

  if (answer === null) {
    alert('Игра окончена.');
    return;
  } else if (Number.isNaN(+answer) || +answer === 0) {
    alert('Введи число!');
    checkAnswer(hiddenNumber);
  } else {
    if (+answer === hiddenNumber) {
      alert('Правильно!');
    } else if (+answer > hiddenNumber) {
      alert('Меньше!');
      checkAnswer(hiddenNumber);
    } else if (+answer < hiddenNumber) {
      alert('Больше!');
      checkAnswer(hiddenNumber);
    }
  }
};

const hiddenNumber = Math.floor(Math.random() * 100) + 1;

console.log(hiddenNumber);
checkAnswer(hiddenNumber);
