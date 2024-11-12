'use strict';

(() => {
  const game = () => {
    let userCountBalls = 5;
    let computerCountBalls = 5;

    console.log('Игрок: ' + userCountBalls);
    console.log('Компьютер: ' + computerCountBalls);

    return function start() {
      const userMove = +prompt('Загадайте число от 1 до 5');
      const computerMove = Math.round(Math.random() * (5 - 1) + 1);
      const userParity = (userMove % 2 === 0) ? 'чёт' : 'нечёт';
      const computerParity = (computerMove % 2 === 0) ? 'чёт' : 'нечёт';

      if (computerParity === userParity) {
        alert('Компьютер угадал.');
        userCountBalls -= userMove;
        computerCountBalls += userMove;
        (userCountBalls > 0) ? alert('У вас осталось: ' + userCountBalls + ' шариков.') :
          alert('У вас больше не осталось шариков...');
      } else {
        alert('Компьютер не угадал!')
        userCountBalls += userMove;
        computerCountBalls -= userMove;
        alert('У вас осталось: ' + userCountBalls + ' шариков.');
      }

      if (userCountBalls <= 0) {
        alert('Поражение');
        return;
      } else if (computerCountBalls <= 0) {
        alert('Победа');
        return;
      } else {
        return start();
      }
    }
  }

  window.RPS = game;
})();