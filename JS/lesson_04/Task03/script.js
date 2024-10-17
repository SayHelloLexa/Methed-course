let finalSum = (cartSum, quantityOfGoods, promo) => {
  if (quantityOfGoods > 10) {
    cartSum -= cartSum * 0.03;
  };

  if (cartSum > 30000) {
    cartSum -= (cartSum - 30000) * 0.15;
  };

  if (promo === 'METHED') {
    cartSum -= cartSum * 0.1;
  }

  if (promo === 'G3H2Z1' && cartSum > 2000) {
    cartSum -= 500;
  }
  
  return cartSum
}

console.log(finalSum(40000, 10));
console.log(finalSum(40000, 11, 'METHED'));
console.log(finalSum(40000, 11, 'G3H2Z1'));
console.log(finalSum(5000, 11, 'G3H2Z1'));
console.log(finalSum(2000, 11, 'G3H2Z1'));