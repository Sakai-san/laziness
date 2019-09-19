const getAverage = grades => {
  const gradesNb = grades.length;
  return gradesNb === 0
    ? 0
    : grades.reduce((acc, grade) => acc + grade, 0) / gradesNb;
};

const hasPassed = average => average >= 4;

const studentHasPassed = student => student.avg >= 4;

const compose = (...fs) => x => fs.reduceRight((acc, f) => f(acc), x);

const withAverage = student => ({
  ...student,
  avg: getAverage(student.grades)
});

module.exports = {
  withAverage,
  getAverage,
  hasPassed,
  compose,
  studentHasPassed
};
