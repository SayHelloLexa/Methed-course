const productName = prompt('Наименование товара');
const quantityOfGoods = Number(prompt('Кол-во товара', [0]));
const productCategory = prompt('Категория товара');
const PRODUCT_PRICE = Number(prompt('Цена за 1 шт', [0])); 

console.log('На складе ' + quantityOfGoods + ' единицы товара ' 
  + productName + ' на сумму ' + PRODUCT_PRICE * quantityOfGoods + ' рублей.');