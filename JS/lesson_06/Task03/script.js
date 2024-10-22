'use strict';

const addPrefix = (names, prefix) => {
  const prefixNames = [];

  for (let i = 0; i < names.length; i++) {
    prefixNames.push(prefix + ' ' + names[i]);
  }

  return prefixNames;
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'));