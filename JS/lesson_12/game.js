'use strict';

(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    // Функция вызывается для компьютера, чтобы вернуть ранд индекс,
    // а с помощью индекса вернуть элемент массива

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const game = (language) => {

        // Свойства объекта меняются в зависимости от победы стороны

        const result = {
            player: 0,
            computer: 0,
        };

        const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

        return function start() {
            // Начинает пользователь, пользователь вводит камень, ножницы или бумагу. +
            // Далее ходит компьютер, берет из массива рандомный элемент. +
            // Обрабатываем элемент компьютера в условиях. +
            // Меняем свойства объекта в зависимости от победы одной из сторон. +
            // Возвращаем alert. +
            // Спрашиваем пользователя, не хочет ли сыграть еще раз через confirm+

            // Доп:
            // Если пользователь нажимает отмена, переспрашиваем: 'точно ли хочет выйти'. confirm - true или false. +
            // Добавить проверку на то, что введены именно камень ножницы или бумага +

            // Реализация через рекурсию без единого цикла +

            let userAnswer = prompt('Камень, ножницы или бумага?');

            if (userAnswer === null) {
                let quit = confirm('Точно хотите выйти?');
                if (quit === true) {
                    alert('Результат: \n' + 'Вы: ' + result.player + '\n' + 'Компьютер: ' + result.computer);
                }
            } else {
                let computerAnswer = FIGURES_RUS[getRandomIntInclusive(0, 2)];
                const ARRAY_OF_STONE = ['Камень', 'камень', 'кам', 'к'];
                const ARRAY_OF_SCISSOR = ['Ножницы', 'ножницы', 'нож', 'н'];
                const ARRAY_OF_PAPER = ['Бумага', 'бумага', 'бум', 'б'];

                // Обрабатываем ходы пользователя и компьютера
                if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === FIGURES_RUS[0]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Ничья');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === FIGURES_RUS[1]) {
                    result.player++;
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Вы победили');
                } else if (ARRAY_OF_STONE.includes(userAnswer) && computerAnswer === FIGURES_RUS[2]) {
                    result.computer++;
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'камень \n Компьютер победил');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === FIGURES_RUS[1]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Ничья');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === FIGURES_RUS[2]) {
                    result.player++;
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Вы победили');
                } else if (ARRAY_OF_SCISSOR.includes(userAnswer) && computerAnswer === FIGURES_RUS[0]) {
                    result.computer++;
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'ножницы \n Компьютер победил');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === FIGURES_RUS[2]) {
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Ничья');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === FIGURES_RUS[0]) {
                    result.player++;
                    alert('Компьютер: ' + computerAnswer + '\n' + 'Вы: ' + 'бумага \n Вы победили');
                } else if (ARRAY_OF_PAPER.includes(userAnswer) && computerAnswer === FIGURES_RUS[1]) {
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