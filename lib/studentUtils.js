const getAverage = student => {
  const gradesNb = student.grades.length;
  return gradesNb === 0
    ? 0
    : student.grades.reduce((acc, grade) => acc + grade, 0) / gradesNb;
};

const hasPassed = average => average >= 4;

const compose = (...fs) => x => fs.reduceRight((acc, f) => f(acc), x);

export default {
  getAverage,
  hasPassed,
  compose
};
