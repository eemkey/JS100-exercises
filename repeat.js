function repeat(num, str) {

  let totalStr = "";
  let count = 0;
  while (count < num) {
    totalStr += str;
    count++;
  }
  return totalStr;
}

console.log(repeat(3, 'ha'));