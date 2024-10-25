'use strict';

let typeOfAnswer = (answer) => {
  while (Number.isNaN(+answer)) {
    alert('Введи число!');
    answer = prompt(`Угадай число от ${(+n > +m) ? +m : +n} до ${(+n > +m) ? +n : +m}`);
  }

  return answer;
}

let typeOfFirstRangeNumber = () => {
  while (Number.isNaN(+n)) {
    alert('Введи число!');
    n = prompt('Введите первое число диапазона:');
  }
}

let typeOfSecondRangeNumber = () => {
  while (Number.isNaN(+m)) {
    alert('Введи число!');
    m = prompt('Введите первое число диапазона:');
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

let countAttempt = () => {
  const min = (+n > +m) ? +m : +n;
  const max = (+n > +m) ? +n : +m;

  if (min === 50 && max === 100) {
    return 15;
  }

  return (max - min + 1) * 0.3;
}

let n = prompt('Введите первое число диапазона:');

typeOfFirstRangeNumber();

let m = prompt('Введите второе число диапазона:');

typeOfSecondRangeNumber();

const hiddenNumber = setHiddenNumber(n, m);

let attempt = countAttempt();
console.log(attempt);

if (isRangeNumberNull()) {
  alert('Игра окончена.')
} else {
  let answer;
  const rememberedNumbers = [];

  while (+answer !== hiddenNumber) {
    console.log(rememberedNumbers);
    console.log(attempt);

    answer = prompt(`Угадай число от ${(+n > +m) ? +m : +n} до ${(+n > +m) ? +n : +m}`);
    answer = typeOfAnswer(answer);

    if (answer === null) {
      alert('Игра окончена.');
      break;
    }

    if (rememberedNumbers.includes(+answer) && !Number.isNaN(+answer)) {
      alert('Это число вы уже вводили');
      continue;
    }

    if (!Number.isNaN(+answer)) {
      rememberedNumbers.push(+answer);
    }

    if (+answer > hiddenNumber) {
      alert('Меньше!');
      attempt--;
    } else if (+answer < hiddenNumber) {
      alert('Больше!');
      attempt--;
    }

    if (attempt === 0) {
      alert('Игра окончена.');
      break;
    }

    if (+answer === hiddenNumber) {
      alert('Правильно!'); 
      break;
    }
  }
}