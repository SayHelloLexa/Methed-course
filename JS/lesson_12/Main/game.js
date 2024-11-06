'use strict';

(() => {
    const FIGURES = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const game = () => {
        const result = {
            player: 0,
            computer: 0,
        };
        
        return function start() {
            let userAnswer = prompt('Камень, ножницы или бумага?');

            if (userAnswer === null) {
                let quit = confirm('Точно хотите выйти?');
                if (quit === true) {
                    alert('Результат: \n' + 'Вы: ' + result.player + '\n' + 'Компьютер: ' + result.computer);
                } else {
                    return start();
                }
            } else {
                let computerAnswer = FIGURES[getRandomIntInclusive(0, 2)];
                const ARRAY_OF_STONE = ['Камень', 'камень', 'кам', 'к'];
                const ARRAY_OF_SCISSOR = ['Ножницы', 'ножницы', 'нож', 'н'];
                const ARRAY_OF_PAPER = ['Бумага', 'бумага', 'бум', 'б'];

                // Обрабатываем ходы пользователя и компьютера
                if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === FIGURES[0]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Ничья');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === FIGURES[1]) {
                    result.player++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Вы победили');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === FIGURES[2]) {
                    result.computer++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Компьютер победил');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === FIGURES[1]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Ничья');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === FIGURES[2]) {
                    result.player++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Вы победили');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === FIGURES[0]) {
                    result.computer++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Компьютер победил');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === FIGURES[2]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Ничья');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === FIGURES[0]) {
                    result.player++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Вы победили');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === FIGURES[1]) {
                    result.computer++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Компьютер победил');
                } else if (!ARRAY_OF_STONE.includes(userAnswer) || !ARRAY_OF_SCISSOR.includes(userAnswer) ||
                    !ARRAY_OF_PAPER.includes(userAnswer)) {
                    return start();
                }

                const continueGame = confirm('Сыграем еще раз?');

                if (continueGame) {
                    return start();
                } else {
                    alert('Результат: \n' + 'Вы: ' + result.player + '\n' + 'Компьютер: ' + result.computer);
                }
            }
        };
    };

    window.RPS = game;
})();