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
            let userAnswer = language === 'EN' || language === 'ENG' ?
                prompt('Rock, scissors or paper?') : prompt('Камень, ножницы или бумага?');

            if (userAnswer === null) {
                let quit = language === 'EN' || language === 'ENG' ?
                    confirm('Are you sure you want to go out?') : confirm('Точно хотите выйти?');
                if (quit === true) {
                    language === 'EN' || language === 'ENG' ?
                        alert('Result: \n' + 'You: ' + result.player + '\n' + 'Computer: ' + result.computer) :
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
                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'rock \n Draw') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Ничья');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === lang[1]) {
                    result.player++;

                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'rock \n You won') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Вы победили');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === lang[2]) {
                    result.computer++;

                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'rock \n Computer won') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Компьютер победил');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === lang[1]) {
                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'scissors \n Draw') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Ничья');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === lang[2]) {
                    result.player++;

                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'scissors \n You won') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Вы победили');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === lang[0]) {
                    result.computer++;

                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'scissors \n Computer won') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Компьютер победил');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === lang[2]) {
                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'paper \n Draw') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Ничья');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === lang[0]) {
                    result.player++;

                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'paper \n You won') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Вы победили');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === lang[1]) {
                    result.computer++;

                    language === 'EN' || language === 'ENG' ?
                        alert('Computer: ' + computerAnswer + '\n' + 'You: ' + 'paper \n Computer won') :
                        alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Компьютер победил');
                } else if (!ARRAY_OF_STONE.includes(userAnswer) || !ARRAY_OF_SCISSOR.includes(userAnswer) ||
                    !ARRAY_OF_PAPER.includes(userAnswer)) {
                    return start();
                }

                const continueGame = language === 'EN' || language === 'ENG' ?
                    confirm('Shall we play again?') :
                    confirm('Сыграем еще раз?');

                if (continueGame) {
                    return start();
                } else {
                    language === 'EN' || language === 'ENG' ?
                        alert('Result: \n' + 'You: ' + result.player + '\n' + 'Computer: ' + result.computer) :
                        alert('Результат: \n' + 'Вы: ' + result.player + '\n' + 'Компьютер: ' + result.computer);
                }
            }
        };
    };

    window.RPS = game;
})();