const { generateStudents } = require("./lib/studentsFactory");
const {
  compose,
  haspassed,
  getAverage,
  withAverage,
  studentHasPassed
} = require("./lib/studentsUtils");

const students = require("./lib/mock-students");
const generatedStudents = generateStudents(1000);

const take = 2;

const processing = compose(
  studentHasPassed,
  withAverage
);

const taken = [];

function* studentStream(index = 0) {
  if (students.length - 1 === index) {
    yield null;
  } else if (take === taken.length) {
    yield taken;
  } else {
    if (processing(students[index])) {
      taken.push(students[index]);
    }
    yield* studentStream(index + 1);
  }
}

const iterate = studentStream(0);

console.log(iterate.next().value);
