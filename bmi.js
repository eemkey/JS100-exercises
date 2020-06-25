function bmi(height, weight) {
  let bmi = weight / (height / 100) ** 2;
  return bmi.toFixed(2);
}

console.log(bmi(180, 80));




