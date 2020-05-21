const input = document.querySelector("input");
const inputV = document.getElementById("input");
const h1 = document.querySelector("h1");
const img = document.querySelector(".img");
const btnX = document.querySelector(".btn--x");
const btnOk = document.querySelector(".btn--ok");
const number = "5193080150954111";

let splitNumberArr;
let newArr = [];
let sumArr = [];
let result;
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
  result = sumArr
    .filter((elem) => elem !== undefined)
    .map((i) => {
      return Number(i);
    })
    .reduce((a, b) => a + b);
  return;
};

console.log(result % 10);

const changeInputValue = () => {
  let inputNumber = inputV.value + "";
  if (
    inputNumber.length === 15 ||
    inputNumber.length === 13 ||
    inputNumber.length === 16
  ) {
    splitNumber(inputV.value);
    if (!(result % 10) && result != undefined) {
      h1.textContent = "Card is Valid";
      console.log(`card is valid`);
      switch (inputNumber.length) {
        case 15:
          img.src = `img/MasterCard.svg`;
          break;
        case 16:
          img.src = `img/Visa.png`;
          break;
        case 13:
          img.src = `img/AmericanExpress.jpg`;
          break;
        default:
          img.src = "";
      }
    } else {
      h1.textContent = "Card is not Valid";
      img.src = "";

      console.log(`card is not valid`);
    }
  } else {
    h1.textContent = "wrong number";
    img.src = "";
  }
  console.log(result);
};
function clearInput() {
  input.value = "";
  h1.textContent = "";
  img.src = "";
}
input.addEventListener("change", changeInputValue);
btnOk.addEventListener("change", changeInputValue);
btnX.addEventListener("click", clearInput);
