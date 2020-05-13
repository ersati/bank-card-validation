const number = "5193080150954111";
let splitNumberArr;
let newArr = [];
let sumArr = [];
const splitNumber = (number) => {
  const splitNum = [...number];
  splitNumberArr = splitNum;
  for (let i = 0; i < splitNumberArr.length; i += 2) {
    newArr.push(splitNumberArr[i] * 2);
    sumArr.push(splitNumberArr[i + 1]);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > 9) {
      sumArr.push(
        (newArr[i] + "")
          .split("")
          .map((i) => {
            return Number(i);
          })
          .reduce((a, b) => a + b)
      );
    } else {
      sumArr.push(newArr[i]);
    }
  }
  return;
};
splitNumber(number);
// console.log(newArr);

let result = sumArr
  .map((i) => {
    return Number(i);
  })
  .reduce((a, b) => a + b);

console.log(result);
if (!(result % 10)) {
  console.log(`card is valid`);
} else {
  console.log(`card is not valid`);
}
