const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (letters) {
  const lowerCaseStr = letters.toLowerCase();
  const result = {};
  for (let letter of lowerCaseStr) {
    if (letter === ' ') {
      continue;
    }
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));
