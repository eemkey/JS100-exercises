function isBlank(str) {
  return !/\S/.test(str);
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true
console.log(isBlank('        hello ')); 
console.log(isBlank('  O   ')); 
console.log(isBlank('')); 