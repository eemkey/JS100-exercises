let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

function convertToNested(obj) {
  const newArr = [];
  for (let key in obj) {
    newArr.push([key, obj[key]]);
  }
  return newArr;
}

console.log(convertToNested(person));

