const { withAverage, getAverage, compose } = require("./lib/studentsUtils");

const avgMiddleware = (student, next) => {
  student.avg = getAverage(student.grades);
  next(student);
};

const ageMiddleware = (student, next) => {
  student.age =
    new Date().getFullYear() - parseInt(student.birthDate.split("-")[0]);
};

const decorate = f1 => f => args => f1(args, f);

const toma = {
  name: "Thomas",
  birthDate: "1979-04-22",
  grades: [4, 3, 1]
};

console.log("before", toma);
decorate(avgMiddleware)(ageMiddleware)(toma);
console.log("after", toma);
