var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14,
};

for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log('Planet: ' + planet + ', # of Moons: ' + numberOfMoons);
}

const list = {
  title: 'shopping List',
  itemOne: 'Milk',
  itemTwo: 'Cookies',
  importantItem: 'treat',
};

// for of // array: values
// for of // objects : Big error

// for in // array: index
for (let key in list) {
  console.log('key:  ', key);
  console.log('val:  ', list[key]);
}
/////////////////////////

console.log(Object.keys(list));
console.log(Object.values(list));
