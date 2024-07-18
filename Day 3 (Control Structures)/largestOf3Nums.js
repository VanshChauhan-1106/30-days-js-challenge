const num1 = 5;
const num2 = 7;
const num3 = 2;

if (num1 == num2 && num2 == num3) {
  console.log(`${num1}, ${num2}, & ${num3} are equal!`);
} else {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is largest!`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is largest!`);
  } else {
    console.log(`${num3} is largest!`);
  }
}
