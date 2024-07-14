// Activity - 1 (Arithmetic Operators)

let A = 50;
let B = 10;

console.log("A : ", A, ", B : ", B);
console.log("Sum is of A & B :", A + B);
console.log("Substarion of B from A is : ", A - B);
console.log("Multiplication of A and B is :", A * B);
console.log("Devide of A from B is : ", A / B);
console.log("Remainder when B devides A : ", A % B);

console.log();
// Activity - 2 (Assignment Operators)

A += 15;
console.log("Value of A after adding 15 : ", A);

B -= 2;
console.log("Value of B after Substracting 2 : ", B);

console.log();

// Activity - 3 (Comparison Operators)

console.log("15 > 2 :", 15 > 2);
console.log("15 < 2 :", 15 < 2);

console.log("20 >= 10: ", 20 >= 10);
console.log("20 <= 10: ", 20 <= 10);

console.log("25 == 23", 25 == 23);
console.log("23 == 23", 23 == 23);
console.log("36(num) == 36(str)", 36 == "36");
console.log("36(num) === 36(str)", 36 === "36");

console.log();

// Activity - 4 (Logical Operators)

console.log("25 >= 24 && 25 <= 50 :", 25 >= 24 && 25 <= 50);
console.log("25 >= 24 && 25 >= 50 :", 25 >= 24 && 25 >= 50);

console.log("25 >= 24 || 25 <= 50 :", 25 >= 24 || 25 <= 50);
console.log("25 >= 24 || 25 >= 50 :", 25 >= 24 || 25 >= 50);
console.log("25 >= 24 || 25 >= 50 :", 25 <= 24 || 25 >= 50);

let val = true;
console.log("!val : ", !val);

console.log();

// Activity - 4 (Ternary Operator)

let num = 34;
console.log("num : ", num);
num >= 0 ? console.log("num is positive!") : console.log("num is negative!");
