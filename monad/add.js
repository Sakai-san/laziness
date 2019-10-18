const { Just, Maybe } = require("monet");

console.log("1 + 2 =", 1 + 2);

const add = a => b => a + b;
console.log("1 + 2 =", add(1)(2));

console.log("1 + 2 =", Just(1).fold()(value => value + 2));

console.log(
  "1 + 2 =",
  Maybe.Just(1)
    .ap(Maybe.Just(2).map(add))
    .just()
);

const divide = a => b => a / b;
console.log(
  "1 / 0 =",
  Maybe.Just(1)
    .ap(Maybe.Just(0).map(divide))
    .just()
);
