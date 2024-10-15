// Первая задача:

// В прошлом задании вы от пользователя получали количество товара и цену.

// ✔ С помощью конструкции if (else) убедитесь, что пользователь ввёл число

// ✔ Если число, то всё должно работать как и в прошлом задании

// ✔ Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"

// ✔ Других сообщений в консоли быть не должно.

const productName = prompt('Наименование товара');
const quantityOfGoods = Number(prompt('Кол-во товара', [0]));
const productCategory = prompt('Категория товара');
const PRODUCT_PRICE = Number(prompt('Цена за 1 шт', [0]));

if (
  typeof quantityOfGoods === 'number' && 
  typeof PRODUCT_PRICE === 'number' && 
  !Number.isNaN(quantityOfGoods) && 
  !Number.isNaN(PRODUCT_PRICE)
) {
  console.log('На складе ' + quantityOfGoods + ' единицы товара ' 
    + productName + ' на сумму ' + PRODUCT_PRICE * quantityOfGoods + ' рублей.');
} else console.log('Вы ввели некорректные данные');