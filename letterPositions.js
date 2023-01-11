const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual} !== ${expected}`);
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
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let element = sentence[i];
    if (element === ' ') {
      continue;
    }
    if (results[element]) {
      results[element].push(i);
    } else {
      results[element] = [i];
    }
  }
  return results;
};

console.log(letterPositions('lighthouse in the house'));

assertArraysEqual(letterPositions('hello').e, [1]);
