console.log("Print numbers from 1 to 10 and skip 5!");

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
