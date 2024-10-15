'use strict';

// Вторая задача

const rain = Math.round(Math.random()); 

if (rain == 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else console.log('Дождя нет!');

// Третья задача

let mathExamPoints = Number(prompt('Введите кол-во баллов по математике:', [0]));
let rusExamPoints = Number(prompt('Введите кол-во баллов по русскому языку:', [0]));
let infExamPoints = Number(prompt('Введите кол-во баллов по информатике:', [0]));

if (
  Number.isNaN(mathExamPoints) ||
  Number.isNaN(rusExamPoints) ||
  Number.isNaN(infExamPoints)
) {
  console.log('Вы ввели некорректные данные');
} else if (mathExamPoints + rusExamPoints + infExamPoints >= 265) {
  console.log('Поздравляю, вы поступили на бюджет!');
} else console.log('Вам не хватает баллов на бюджет ¯\_(ツ)_/¯');

// Четвертая задача

let requestedSum = Number(prompt('Какую сумму хотите снять?', [0]));

if (Number.isNaN(requestedSum)) {
  console.log('Вы ввели некорректную сумму');
} else if (requestedSum >= 100) {
  console.log('Получите ваши деньги');
} else console.log('Минимальная сумма выдачи: 100 руб');