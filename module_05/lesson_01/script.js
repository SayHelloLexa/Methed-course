'use strict';

let ad = document.getElementsByClassName('ads')[0];
ad.remove();

let firstItem = document.getElementsByClassName('item_one')[0];
let secondItem = document.getElementsByClassName('item_two')[0];
let thirdItem = document.getElementsByClassName('item_three')[0];
let fourthItem = document.getElementsByClassName('item_four')[0];
let fifthItem = document.getElementsByClassName('item_five')[0];
let sixItem = document.getElementsByClassName('item_six')[0];

// Исправляем порядок элементов в 4 карточке
let fourthPropItemFromFourthList = document.querySelector('.item_two .props__item_four');
let thirdPropItemFromFourthList = document.querySelector('.props__item:nth-child(3)');
thirdPropItemFromFourthList.append(fourthPropItemFromFourthList);

// Меняем списки на свои места в 3 и 5 карточках
let listFromFifthItem = document.querySelector('.item_three .props__list');
let contentFromFifthItem = document.querySelector('.item_five .content');
let listFromThirdItem = document.querySelector('.item_five .props__list');
listFromFifthItem.replaceWith(listFromThirdItem);
contentFromFifthItem.append(listFromFifthItem);

// Меняем заголовки у карточек
let titleFromSixItem = document.querySelector('.item_two .item__title');
let titleFromSecondItem = document.querySelector('.item_five .item__title');
let titleFromFifthItem = document.querySelector('.item_six .item__title');
let listFromSixItem = document.querySelector('.item_six .props__list');

titleFromSecondItem.replaceWith(titleFromFifthItem);
titleFromSixItem.replaceWith(titleFromSecondItem);
listFromSixItem.prepend(titleFromSixItem);

// Возвращаем приложения в карточку
let firstApplication = document.querySelector('.item_six .props__item:nth-child(10)');
let secondApplication = document.querySelector('.item_six .props__item:nth-child(11)');
let eightItemFromSecondList = document.querySelector('.item_two .props__item:nth-child(8)');

eightItemFromSecondList.append(firstApplication);
firstApplication.append(secondApplication);

fourthItem.replaceWith(firstItem);

thirdItem.after(fourthItem);