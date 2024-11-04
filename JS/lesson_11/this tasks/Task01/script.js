'use strict';

const rectangle = {
  _width: 5,
  _height: 5,
  _error: false,

  set width(value) {
    try {
      if (typeof value === 'number') {
        this._width = value;
      } else {
        throw new Error('Передан неправильный тип данных.');
      }
    } catch(error) {
      console.log(error);
      this._error = true;
    }
  }, 

  set height(value) {
    try {
      if (typeof value === 'number') {
        this._height = value;
      } else {
        throw new Error('Передан неправильный тип данных.');
      }
    } catch(error) {
      console.log(error);
      this._error = true;
    }
  },

  get perimeter() {
    if (this._error !== true) {
      return this._width * 2 + this._height * 2 + 'см';
    } else {
      return 'Ошибка в данных';
    }
  },

  get square() {
    if (this._error !== true) {
      return this._width * this._height + 'см^2';
    } else {
      return 'Ошибка в данных';
    }
  }
}

console.log(rectangle.perimeter);
console.log(rectangle.square);

rectangle.width = 15;
rectangle.height = 13;

console.log(rectangle.perimeter);
console.log(rectangle.square);


rectangle.width = '15';
rectangle.height = '13';

console.log(rectangle.perimeter);
console.log(rectangle.square);
