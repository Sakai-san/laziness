// https://itnext.io/you-may-need-laziness-in-your-javascript-f03e8a2d4629
const generate = (fn, dependency, descriptor) => {
  return Object.create(
    Object.assign({ [Symbol.iterator]: fn }, dependency),
    descriptor
  );
};
const take = (numberToTake, iterable) => {
  return generate(() => {
    const iterator = iterable[Symbol.iterator]();
    let remainingElements = numberToTake;

    return {
      next: () => {
        let { done, value } = iterator.next();

        done = done || remainingElements-- <= 0;

        return { done, value: done ? undefined : value };
      }
    };
  });
};

const getValue = function(iterable) {
  return Array.from(iterable);
};

const compose5 = (fn, ...funcs) => {
  return (...args) => {
    return funcs.reduce((acc, func) => func(acc), fn(...args));
  };
};

const map = (fn, iterable) => {
  return generate(() => {
    const iterator = iterable[Symbol.iterator]();

    return {
      next: () => {
        const { done, value } = iterator.next();

        return { done, value: done ? undefined : fn(value) };
      }
    };
  });
};

const filter = (fn, iterable) => {
  return generate(() => {
    const iterator = iterable[Symbol.iterator]();

    return {
      next: () => {
        do {
          var { done, value } = iterator.next();
        } while (!done && !fn(value));
        return { done, value };
      }
    };
  });
};

const cubicPar = compose5(
  map.bind(null, x => x * x * x),
  filter.bind(null, x => x % 2 === 0)
);

const students = [
  { name: "Hiro", grades: [6, 2, 6, 2] },
  { name: "Rie", grades: [3, 3] },
  { name: "Asako", grades: [6, 3] },
  { name: "Masaru", grades: [4, 3] },
  { name: "Kyoko", grades: [6, 2, 5, 4, 6] },
  { name: "Kazuhide", grades: [6, 1, 6] }
];

const fiveElements = take(10, cubicPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(getValue(fiveElements));
// [ 8, 64, 216, 512, 1000 ]
