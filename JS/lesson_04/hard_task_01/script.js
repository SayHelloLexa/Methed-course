let greatestCommonDiv = (a, b) => {
  let maxNumber = (a > b) ? a : b; 
  let minNumber = (a > b) ? b : a; 
  let reminder = (a > b) ? a % b : b % a; 
  
  if (reminder === 0) {
    if (a > b) {
      return b
    } else return a;
  } else {
    while (reminder !== 0) {
      maxNumber = minNumber; 
      minNumber = reminder; 
      reminder = maxNumber % minNumber; 
    }
  }

  return minNumber;
};

console.log(greatestCommonDiv(140, 96));
console.log(greatestCommonDiv(24, 18));
console.log(greatestCommonDiv(24, 8))