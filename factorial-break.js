let num = 10;
let i = num - 1;

while (i >= 1) {
  if (i === 90) {
    continue;
  }
  if (i > 400000000000) {
    break;
  }
  console.log((num = num * i));
  i--;
}
console.log(num);
