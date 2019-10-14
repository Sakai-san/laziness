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

const passedStudent2 = List.fromArray(moreStudents)
  .map(st => ({
    ...st,
    Grades: st && st.grades ? Maybe.of(st.grades) : Maybe.fromNull([])
  }))
  .map(st => ({
    ...st,
    Sum: st.Grades.fold()(v => v.reduce((acc, current) => acc + current, 0))
  }))
  .map(st => ({
    ...st,
    Avg:
      st.Grades.fold()(v => v.length) > 0
        ? st.Sum / st.Grades.fold()(v => v.length)
        : 0
  }))
  .filter(st => st.Avg >= 4.0)
  .toArray();

console.log("passed", passedStudent2);
