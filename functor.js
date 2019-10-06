const WrapperForValue = function(value) {
  this.value = value;
};

WrapperForValue.prototype.map = function(transform) {
  // this.value = transform(this.value);
  return new WrapperForValue(transform(this.value));
};

const wrapperFor4 = new WrapperForValue(4);
var newFunctor0 = wrapperFor4.map(value => value + 21);
console.log("newFunctor0 : ", newFunctor0);

var newFunctor1 = newFunctor0.map(value => value + 3).map(value => value + 1);
console.log("newFunctor1 : ", newFunctor1);

// le but de la monad est de composer un functor

// const combine = x => newFunctor1(newFunctior0(x));

// wrap (lift) take a raw value and wrap it inside a container
// map apply a function to a wrapped value
// bind compose wrapped values with each other

// https://www.softdevtube.com/2019/01/08/pragmatic-guide-to-functional-geekery/
// https://www.youtube.com/watch?v=QyJZzq0v7Z4
