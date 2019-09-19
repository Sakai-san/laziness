const { range, from } = require("rxjs");
const { map, filter, take } = require("rxjs/operators");

const { generateStudents } = require("../lib/studentsFactory");
const students = require("../lib/mock-students");

const {
  compose,
  haspassed,
  getAverage,
  withAverage,
  studentHasPassed
} = require("../lib/studentsUtils");

const generatedStudents = generateStudents(1000000);

console.time("Time elapsed");
const hasPassed = from(students.concat(generatedStudents)).pipe(
  map(withAverage),
  filter(studentHasPassed),
  take(1)
);

hasPassed.subscribe(x => console.log(x));

console.timeEnd("Time elapsed");
