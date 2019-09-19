function myIterator() {
  var array = [1, 2];
  return {
    next: function() {
      const iteration = array.length;
      if (iteration) {
        return {
          value: array.shift(),
          done: false,
          index: iteration
        };
      } else {
        return {
          done: true,
          index: iteration
        };
      }
    }
  };
}

var iterator = myIterator();
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { done: true }
