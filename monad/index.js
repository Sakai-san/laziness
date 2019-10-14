const students = require("../lib/mock-students");
const { generateStudents } = require("../lib/studentsFactory");

const studentsNotWellFormed = [
  { name: "Liam" },
  { name: "Stephan", grades: null },
  { name: "Maximilian", grades: [] },
  { name: "Emil", grades: undefined }
];

const moreStudents = [...students, ...studentsNotWellFormed];
console.log(moreStudents);
