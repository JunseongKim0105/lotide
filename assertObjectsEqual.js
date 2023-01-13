const eqObjects = function (object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let i = 0; i < object1Keys.length; i++) {
    if (Array.isArray(object1[object1Keys[i]])) {
      if (!eqArrays(object1[object1Keys[i]], object2[object1Keys[i]])) {
        return false;
      }
    } else {
      if (object1[object1Keys[i]] !== object2[object1Keys[i]]) {
        return false;
      }
    }
  }
  return true;
};
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log('✅✅✅ Assertion Passed: [object Object] === [object Object]');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]');
  }
};
console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
