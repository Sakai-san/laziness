const { withAverage, compose } = require("./lib/studentsUtils");
const withAge = student => ({
  ...student,
  age: new Date().getFullYear() - parseInt(student.birthDate.split("-")[0])
});

const decorate = f1 => f => args => f1(f(args));

decorate(args => console.log(args))(x => 2 * x)(5);

const decorated = compose(
  withAverage,
  withAge
)({
  name: "Thomas",
  birthDate: "1979-04-22",
  grades: [4, 3, 1]
});

console.log("decorated", decorated);
