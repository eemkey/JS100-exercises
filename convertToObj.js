let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

function convertToObj(arr) {
  const newObj = {};
  arr.map(entry => newObj[entry[0]] = entry[1]);
  return newObj;
}

convertToObj(nestedArray);
// { title: 'Duke', name: 'Nukem', age: 33 }