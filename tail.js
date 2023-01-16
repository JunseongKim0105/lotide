const assertEqual = require(`./assertEqual`);

const tail = function (arr1) {
  const arr2 = arr1[arr1.tail];
  return arr2;
};
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result, ['Lighthouse', 'Labs']); // => will always fail!

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;
