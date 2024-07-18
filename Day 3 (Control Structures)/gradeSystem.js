const marks = 83;
let grade;

if (marks >= 0 && marks <= 39) {
  grade = "F";
} else if (marks >= 40 && marks <= 49) {
  grade = "C";
} else if (marks >= 50 && marks <= 59) {
  grade = "B";
} else if (marks >= 60 && marks <= 69) {
  grade = "B+";
} else if (marks >= 70 && marks <= 79) {
  grade = "A";
} else if (marks >= 80 && marks <= 89) {
  grade = "A+";
} else if (marks >= 90 && marks <= 100) {
  grade = "O";
} else {
  console.log(`${marks} marks are not valid marks! Give the marks between 0 to 100!`);
}

if (grade) {
  console.log(`Your marks are ${marks}, So the grade is ${grade}!`);
}
