const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  const middleIdx = array.length / 2;
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[middleIdx - 1], array[middleIdx]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
