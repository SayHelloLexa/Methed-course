'use string';

let modifiedString = (basedString) => {
  return basedString[0].toUpperCase() + basedString.slice(1);
};

console.log(modifiedString('привет Мир'));