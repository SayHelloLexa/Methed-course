'use strict';

const filter = (allStudents, failedStudents) => {
  const successStudents = [];

  for (let i = 0; i < allStudents.length; i++) {
    if (!failedStudents.includes(allStudents[i])) {
      successStudents.push(allStudents[i]);
    }
  } 

  return successStudents;
}

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudents, failedStudents));