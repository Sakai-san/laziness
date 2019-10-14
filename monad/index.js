const students = require("../lib/mock-students");
const { sumOfGrades } = require("../lib/studentsUtils");
const { List, Maybe, Just, Either } = require("monet");

const studentsNotWellFormed = [
  { name: "Liam" },
  { name: "Stephan", grades: null },
  { name: "Maximilian", grades: [] },
  { name: "Emil", grades: undefined }
];

const moreStudents = [...students, ...studentsNotWellFormed];

const passedStudents = List.fromArray(moreStudents)
  .map(st => ({
    ...st,
    Grades: st.grades ? Maybe.of(st.grades) : Maybe.fromNull()
  }))
  .map(st => ({
    ...st,
    avg: Either.of(st.Grades)
  }));

console.log("passedStudents", passedStudents.flatMap(s => s));
