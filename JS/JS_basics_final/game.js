'use strict';

// Вся логика игры делится на два этапа: игра в RPS и игра в марблы

(() => {
  const game = () => {
    // глобальные переменные
    let userCountBalls = 5;
    let computerCountBalls = 5;
    let continueGame = true;

    // Генрация случайного числа для компьютера в RPS
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    // Ход компьютера в RPS
    const getComputerMove = () => {
      const moves = ['камень', 'ножницы', 'бумага'];
      return moves[getRandomIntInclusive(0, 2)];
    };

    // Проверка правильности ввода игрока в RPS
    // Принимает массив validMoves
    // коллбек функция
    // возвращает элемент, если коллбек вернет true
    const normalizeMove = (move) => {
      const validMoves = ['камень', 'ножницы', 'бумага'];
      return validMoves.find(validMove => validMove.toLowerCase().startsWith(move.toLowerCase()));
    };

    // Проверяет правильность ввода игрока уже в марблах
    // когда компьютер делает ход, задаванием вопроса
    const normalizeParity = (parity) => {
      const validParities = ['чёт', 'нечёт'];
      return validParities.find(validParity => validParity.toLowerCase().startsWith(parity.toLowerCase()));
    };

    // Функция определения победителя в RPS
    // принимает ход игрока и ход компьютера
    // возвращает ничью, если ходы одинаковые
    // в противном случае обрабатывает исход, 
    // когда ходы разные 
    // и возвращает победителя
    const determineWinner = (userMove, computerMove) => {
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

    // Функция игры в RPS
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

      // метод trim() убирает пробелы в начале и в конце строки
      // возвращает новую строку без пробелов
      if (userMove.trim() === '') {
        alert('Выберите: камень, ножницы или бумага!');
        return playRPS();
      }

      // массив корректных ходов в RPS
      // в качестве значения normalizedMove хранит элемент, 
      // который возращает функция normalizeMove
      const normalizedMove = normalizeMove(userMove);

      // функция вернет undefined если значение неккоректно
      // тогда, !undefined === true и выполнится код ниже
      if (!normalizedMove) {
        alert('Выберите: камень, ножницы или бумага!');
        return playRPS();
      }

      // ход компьютера в RPS
      const computerMove = getComputerMove();
      alert(`Компьютер выбрал: ${computerMove}`);

      // определение победителя
      const winner = determineWinner(normalizedMove, computerMove);
      return winner;
    };

    // start марблов
    const start = () => {
      // обработка продолжения игры
      if (!continueGame) return;

      // сброс счета, чтобы при продолжении начать заново
      userCountBalls = 5;
      computerCountBalls = 5;

      // обработка выхода на этапе игры в RPS
      const rpsWinner = playRPS();
      if (rpsWinner === null) {
        return;
      }

      // обработка ничьей в RPS
      if (rpsWinner === 'ничья') {
        alert('Ничья в игре "Камень, ножницы, бумага". Повторим.');
        return start();
      }

      // выбора первого ходящего в марблах
      if (rpsWinner === 'пользователь') {
        userTurn();
      } else {
        computerTurn();
      }
    };

    // обработка счета в марблах
    // если четность числа игрока совпадает с четностью числа компьютера
    // то компьютер угадал
    // иначе компьютер не угадал
    const updateBalls = (userMove, computerMove, userParity, computerParity) => {
      if (userParity === computerParity) {
        alert('Компьютер угадал.');
        userCountBalls -= userMove;
        computerCountBalls += userMove;
      } else {
        alert('Компьютер не угадал!');
        userCountBalls += userMove;
        computerCountBalls -= userMove;
      }

      console.log('Игрок: ' + userCountBalls);
      console.log('Компьютер: ' + computerCountBalls);
      console.log('Чётность юзера: ' + userParity);
      console.log('Чётность компьютера: ' + computerParity);
      console.log('Число компьютера: ' + computerMove);

      (computerCountBalls < 0) ? alert('У вас осталось 10 шариков.') : 
      (userCountBalls < 0) ? alert('У больше не осталось шариков.') : 
      alert(`У вас осталось: ${userCountBalls} шариков.`);
    };

    // проверка окончания игры
    // если у одной и сторон заканчиваются шарики
    // выводится соответстующее сообщение
    // затем проверяется, не хочет ли игрок сыграть еще
    const checkGameOver = () => {
      if (userCountBalls <= 0) {
        alert('Поражение');
      } else if (computerCountBalls <= 0) {
        alert('У компьютера больше не осталось шариков. Победа');
      }

      if (userCountBalls <= 0 || computerCountBalls <= 0) {
        if (confirm('Хотите сыграть ещё?')) {
          continueGame = true;
          start();
        } else {
          continueGame = false;
        }
      }
    };

    // обработка хода игрока
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

      // обрабатываем неккоректные случаи со стороны хода игрока
      const userMoveNumber = +userMove;
      if (Number.isNaN(userMoveNumber) || userMoveNumber < 1 || userMoveNumber > 5) {
        alert('Введите число от 1 до 5!');
        return userTurn();
      }

      // генерируем ответ компьютера
      const computerMove = getRandomIntInclusive(1, 5);
      const userParity = (userMoveNumber % 2 === 0) ? 'чёт' : 'нечёт';
      const computerParity = (computerMove % 2 === 0) ? 'чёт' : 'нечёт';

      // вызываем обработку счета в марблах и проверяем, не закончилась ли игра
      updateBalls(userMoveNumber, computerMove, userParity, computerParity);
      checkGameOver();

      // если игра продолжается, то вызываем ход компьютера
      if (continueGame) {
        computerTurn();
      }
    };

    // обработка хода со стороны компьютера
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

      // проверка на корректность ввода ответа на вопрос компьютера
      // normalizeParity вернет undefined, если введено неккоректное значение
      const normalizedParity = normalizeParity(computerQuestionMove);

      if (!normalizedParity) {
        alert('Введите "чёт" или "нечёт"!');
        return computerTurn();
      }

      const computerQuestionParity = normalizedParity;

      // вызываем обработку счета в марблах и проверяем, не закончилась ли игра
      updateBalls(computerMove, computerMove, computerQuestionParity, computerParity);
      checkGameOver();

      if (continueGame) {
        userTurn();
      }
    };

    return start;
  };

  window.MRBLS = game;
})();
