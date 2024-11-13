'use strict';

(() => {
  const game = () => {
    let userCountBalls = 5;
    let computerCountBalls = 5;
    let continueGame = true;

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const getComputerMove = () => {
      const moves = ['камень', 'ножницы', 'бумага'];
      return moves[getRandomIntInclusive(0, 2)];
    };

    const normalizeMove = (move) => {
      const moveMap = {
        'кам': 'камень',
        'к': 'камень',
        'нож': 'ножницы',
        'н': 'ножницы',
        'бум': 'бумага',
        'б': 'бумага'
      };
      return moveMap[move] || move;
    };

    const determineWinner = (userMove, computerMove) => {
      userMove = normalizeMove(userMove);
      computerMove = normalizeMove(computerMove);

      if (userMove === computerMove) {
        return 'ничья';
      } else if (
        (userMove === 'камень' && computerMove === 'ножницы') ||
        (userMove === 'ножницы' && computerMove === 'бумага') ||
        (userMove === 'бумага' && computerMove === 'камень')
      ) {
        return 'пользователь';
      } else {
        return 'компьютер';
      }
    };

    const playRPS = () => {
      const userMove = prompt('Выберите: камень, ножницы или бумага');
      if (userMove === null) {
        if (confirm('Вы уверены, что хотите выйти?')) {
          continueGame = false;
          return null;
        } else {
          return playRPS();
        }
      }

      const validMoves = ['камень', 'ножницы', 'бумага', 'кам', 'нож', 'бум', 'к', 'н', 'б'];
      if (!validMoves.includes(userMove)) {
        alert('Выберите: камень, ножницы или бумага!');
        return playRPS();
      }

      const computerMove = getComputerMove();
      alert(`Компьютер выбрал: ${computerMove}`);

      const winner = determineWinner(userMove, computerMove);
      return winner;
    };

    const start = () => {
      if (!continueGame) return;

      userCountBalls = 5;
      computerCountBalls = 5;

      const rpsWinner = playRPS();
      if (rpsWinner === null) {
        return;
      }

      if (rpsWinner === 'ничья') {
        alert('Ничья в игре "Камень, ножницы, бумага". Повторим.');
        return start();
      }

      if (rpsWinner === 'пользователь') {
        userTurn();
      } else {
        computerTurn();
      }
    };

    const userTurn = () => {
      if (!continueGame) return;

      const userMove = prompt('Загадайте число от 1 до 5');
      if (userMove === null) {
        if (confirm('Вы уверены, что хотите выйти?')) {
          continueGame = false;
          return;
        } else {
          return userTurn();
        }
      }

      const userMoveNumber = parseInt(userMove, 10);
      if (Number.isNaN(userMoveNumber) || userMoveNumber < 1 || userMoveNumber > 5) {
        alert('Введите число от 1 до 5!');
        return userTurn();
      }

      const computerMove = getRandomIntInclusive(1, 5);
      const userParity = (userMoveNumber % 2 === 0) ? 'чёт' : 'нечёт';
      const computerParity = (computerMove % 2 === 0) ? 'чёт' : 'нечёт';

      if (computerParity === userParity) {
        alert('Компьютер угадал.');
        userCountBalls -= userMoveNumber;
        computerCountBalls += userMoveNumber;
      } else {
        alert('Компьютер не угадал!');
        userCountBalls += userMoveNumber;
        computerCountBalls -= userMoveNumber;
      }

      console.log('Игрок: ' + userCountBalls);
      console.log('Компьютер: ' + computerCountBalls);
      console.log('Чётность юзера: ' + userParity);
      console.log('Чётность компьютера: ' + computerParity);
      console.log('Число компьютера: ' + computerMove);

      (userCountBalls > 10 && computerCountBalls < 0) ? alert('У вас осталось: 10 шариков') :
          (userCountBalls > 0) ? alert('У вас осталось: ' + userCountBalls + ' шариков.') :
            alert('У вас больше не осталось шариков...');

      if (userCountBalls <= 0) {
        alert('Поражение');
        if (confirm('Хотите сыграть ещё?')) {
          continueGame = true;
          start();
        } else {
          continueGame = false;
        }
      } else if (computerCountBalls <= 0) {
        alert('У компьютера больше не осталось шариков. Победа');
        if (confirm('Хотите сыграть ещё?')) {
          continueGame = true;
          start();
        } else {
          continueGame = false;
        }
      } else {
        computerTurn();
      }
    };

    const computerTurn = () => {
      if (!continueGame) return;

      const computerMove = getRandomIntInclusive(1, 5);
      const computerParity = (computerMove % 2 === 0) ? 'чёт' : 'нечёт';

      const computerQuestionMove = prompt('чёт или нечёт?');
      if (computerQuestionMove === null) {
        if (confirm('Вы уверены, что хотите выйти?')) {
          continueGame = false;
          return;
        } else {
          return computerTurn();
        }
      }

      const computerQuestionParity = (computerQuestionMove === 'чёт') ? 'чёт' : 'нечёт';

      if (computerQuestionParity === computerParity) {
        alert('Игрок угадал.');
        computerCountBalls -= computerMove;
        userCountBalls += computerMove;
      } else {
        alert('Игрок не угадал!');
        computerCountBalls += computerMove;
        userCountBalls -= computerMove;
      }

      console.log('Игрок: ' + userCountBalls);
      console.log('Компьютер: ' + computerCountBalls);
      console.log('Чётность юзера: ' + computerQuestionParity);
      console.log('Чётность компьютера: ' + computerParity);
      console.log('Число компьютера: ' + computerMove);

      (userCountBalls > 10 && computerCountBalls < 0) ? alert('У вас осталось: 10 шариков') :
          (userCountBalls > 0) ? alert('У вас осталось: ' + userCountBalls + ' шариков.') :
            alert('У вас больше не осталось шариков...');

      if (userCountBalls <= 0) {
        alert('Поражение');
        if (confirm('Хотите сыграть ещё?')) {
          continueGame = true;
          start();
        } else {
          continueGame = false;
        }
      } else if (computerCountBalls <= 0) {
        alert('У компьютера больше не осталось шариков. Победа');
        if (confirm('Хотите сыграть ещё?')) {
          continueGame = true;
          start();
        } else {
          continueGame = false;
        }
      } else {
        userTurn();
      }
    };

    return start;
  };

  window.MRBLS = game;
})();
