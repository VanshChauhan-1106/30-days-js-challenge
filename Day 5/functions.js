// Activity - 1 (Funtion Declaration)

function evenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is a even number!`);
  } else {
    console.log(`${num} is a odd number!`);
  }
}

// evenOdd(45);

function square(n) {
  return n * n;
}

// console.log(square(5));

// Activity - 2 (Funtion Expression)

function maxOfTwo(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is maximum!`);
  } else if (num2 > num1) {
    console.log(`${num2} is maximum!`);
  } else {
    console.log(`${num1} & ${num2} both are equal!`);
  }
}

// maxOfTwo(7, 17);

function concatenateTwoStr(str1, str2) {
  return str1 + str2;
}

// console.log(concatenateTwoStr("Vansh ", "Chauhan"));

// Activity - 3 (Arrow Funtions)

let sumOfTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(sumOfTwo(4, 5));

const checkChar = (str, char) => {
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === char) {
      return true;
    }
  }
  return false;
};

// console.log(checkChar("vansh", "h"));

// Activity - 4 (Funtion Parameters and Default Values)

function productOfTwo(num1, num2 = 1) {
  return num1 * num2;
}

// console.log(productOfTwo(5, 4));

const greeting = (name, age = 18) => {
  return `${name} you are now ${age} years old!`;
};

// console.log(greeting("vansh", 19));

// Activity - 5 (Higher-Order Functions)

let funcnCall = (funcn, n) => {
  return function () {
    for (let i = 1; i <= n; i++) {
      funcn();
    }
  };
};

let hello = () => console.log("Hello!");

const repeatFuncn = funcnCall(hello, 5);
// repeatFuncn();

function composeFunctions(value, fn1, fn2) {
  return fn2(fn1(value));
}

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

const result = composeFunctions(10, addTwo, multiplyByThree);

console.log(result);
