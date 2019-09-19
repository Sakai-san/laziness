const { generateStudents } = require("./lib/studentFactory");
const { compose, haspassed, getAverage } = require("./lib/studentUtils");

const students = generateStudents(1000);

const take = 3;

const processing = compose(
  haspassed,
  getAverage
);

students[Symbol.iterator()] = function*() {
  const takeArray = [];
  while (takeArray.length < take) {
    takeArray.push(processing(students.shift()));

    yield takeArray;
  }
};

console.log(students.next());
console.log(students.next());
console.log(students.next());
