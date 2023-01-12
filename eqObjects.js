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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
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

const shirtObject = { color: 'red', size: 'medium' };
const anotherShirtObject = { size: 'medium', color: 'red' };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = {
  size: 'medium',
  color: 'red',
  sleeveLength: 'long',
};
eqObjects(shirtObject, longSleeveShirtObject); // => false

const multiColorShirtObject = { colors: ['red', 'blue'], size: 'medium' };
const anotherMultiColorShirtObject = {
  size: 'medium',
  colors: ['red', 'blue'],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: 'medium',
  colors: ['red', 'blue'],
  sleeveLength: 'long',
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
