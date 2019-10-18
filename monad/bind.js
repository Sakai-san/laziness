// TO CHECK
// https://www.youtube.com/watch?v=ZQSU4geXAxM
// https://medium.com/@tzehsiang/javascript-functor-applicative-monads-in-pictures-b567c6415221#.rdwll124i

const { Just, Maybe, Some } = require("monet");

// hello: string -> string
const trimed = first => first.trim();

// hello: string -> string
const hello = first => "Hello " + first;

console.log(hello(trimed("       thomas  ")));

// fold : (a -> b) -> value
// map : (a -> b) -> Monad
// flatMap : (a -> Monad[b]) -> Monad
// ap : Monad[A=>B]: Monad[B]

console.log(
  Maybe.Just("    thomas   ")
    .flatMap(val => Maybe.Just(val.trim()))
    .flatMap(val => Maybe.Just("Hello " + val))
    .just()
);
