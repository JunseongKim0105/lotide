const assertEqual = function (actual, expected) {
  if ((actual = expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr1) {
  let arr2 = arr1.slice(1);
  return arr2;
};
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']); // => will always fail!

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;
module.exports = assertEqual;
