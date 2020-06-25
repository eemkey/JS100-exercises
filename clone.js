function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

console.log(clone(person));