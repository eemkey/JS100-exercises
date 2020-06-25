let str = "launch school tech & talk";

function capitalize(str) {
  let words = str.split(" ");
  let capitalizedArr = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    capitalizedArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return capitalizedArr.join(" ");
  
}

console.log(capitalize(str));