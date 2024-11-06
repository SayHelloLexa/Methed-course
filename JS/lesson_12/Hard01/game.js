'use strict';

(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        };

        const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

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
                let computerAnswer = lang[getRandomIntInclusive(0, 2)];
                const ARRAY_OF_STONE = language === 'EN' || language === 'ENG' ?
                    ['Rock', 'rock', 'ro', 'r'] :
                    ['Камень', 'камень', 'кам', 'к'];
                const ARRAY_OF_SCISSOR = language === 'EN' || language === 'ENG' ?
                    ['Scissors', 'scissors', 'sci', 's'] :
                    ['Ножницы', 'ножницы', 'нож', 'н'];
                const ARRAY_OF_PAPER = language === 'EN' || language === 'ENG' ?
                    ['Paper', 'paper', 'pap', 'p'] :
                    ['Бумага', 'бумага', 'бум', 'б'];

                // Обрабатываем ходы пользователя и компьютера
                if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === lang[0]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'rock \n Ничья');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === lang[1]) {
                    result.player++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'rock \n Вы победили');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === lang[2]) {
                    result.computer++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'rock \n Компьютер победил');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === lang[1]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'scissors \n Ничья');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === lang[2]) {
                    result.player++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'scissors \n Вы победили');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === lang[0]) {
                    result.computer++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'scissors \n Компьютер победил');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === lang[2]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'paper \n Ничья');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === lang[0]) {
                    result.player++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'paper \n Вы победили');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === lang[1]) {
                    result.computer++;

                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'paper \n Компьютер победил');
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