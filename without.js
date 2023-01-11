const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const without = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      array1.splice(i, 1);
    }
  }
  console.log(array1);
  return array1;
};

without([1, 2, 3], [1]); // => [2, 3]
without(['1', '2', '3'], [1, 2, '3']); // => ["1", "2"]
let words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);

assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
