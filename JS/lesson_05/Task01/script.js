'use strict';

const numberInDegree = () => {
  for (let a = 1; a <= 10; a++) {
    console.log('-----------------');
  
    for (let m = 1; m <= 10; m++) {
      console.log('a^m = ' + a ** m);
    }
  }

  console.log('!!!!!!!!!!!!!!!!!');
}

numberInDegree();