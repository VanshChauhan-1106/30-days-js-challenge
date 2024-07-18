let num = 0;
let factorial = 0;
let i = num;

if (num == 0 || num == 1) {
  factorial = 1;
} else {
  do {
    factorial += i;
    i--;
  } while (i >= 1);
}

console.log(`Factorial of ${num} is : ${factorial}`);
