'use strict';

const ackermanFunc = (m, n) => {
  if (m === 0) {
    return n + 1;
  } else if (n === 0) {
    return ackermanFunc(m - 1, 1);
  } else {
    return ackermanFunc(m - 1, ackermanFunc(m, n - 1));
  }
}

console.log(ackermanFunc(3, 2));
