const { Just, Maybe, Some } = require("monet");

console.log(
  Maybe.Just(6)
    .filter(value => value > 10)
    .orSome(10)
);

// under the hood
console.log(
  Maybe.Just(6)
    .flatMap(value => (value > 10 ? Maybe.Just(value) : Maybe.none()))
    .orSome(10)
);
