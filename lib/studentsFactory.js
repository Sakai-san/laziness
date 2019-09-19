const random = require("lodash.random");
const range = require("lodash.range");
const faker = require("faker");

const randomGrades = numberOfItems =>
  range(numberOfItems).map(el => random(1, 6));

const generateStudents = number => {
  return range(number).map(el => ({
    firstName: faker.name.firstName(),
    grades: randomGrades(random(1, 20))
  }));
};

module.exports = {
  generateStudents
};
