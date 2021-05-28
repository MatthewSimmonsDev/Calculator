const oldText = document.querySelector('.old-text');
const newText = document.querySelector('.new-text');
const operators = document.querySelectorAll('.operator');
const integers = document.querySelectorAll('.number');
const btn = document.querySelectorAll('.btn');
const equalsBtn = document.querySelector('.equals');
const clrBtn = document.querySelector('#clear-button');

let storedValue = '';
let storedOperator = '';
let parseOne, parseTwo;



function add(num1, num2){
  newText.textContent = num1 + num2;
  oldText.textContent = num1 + " + " + num2;
}

function subtract(num1, num2){
  newText.textContent = num1 - num2;
  oldText.textContent = num1 + " - " + num2;
}

function multiply(num1, num2){
  newText.textContent = num1 * num2;
  oldText.textContent = num1 + " * " + num2;
}

function divide(num1, num2){
  if (num2 === 0){
    alert("OMG what have you done!");
    location.reload();
  }
  else
  newText.textContent = num1 / num2;
  oldText.textContent = num1 + " / " + num2;
}

function toNum(){
  parseOne = parseFloat(oldText.textContent);
  parseTwo = parseFloat(storedValue);
}

function calculate(){
  switch (storedOperator){
    case "+":
      toNum();
      add(parseOne, parseTwo);
      break;
    case "-":
      toNum();
      subtract(parseOne, parseTwo);
      break;
    case "*":
      toNum();
      multiply(parseOne, parseTwo);
      break;
    case "/":
      toNum();
      divide(parseOne, parseTwo);
      break;
  }

  storedValue = newText.textContent;
  storedOperator = '';
}

function keyPress(e){
  console.log(e.key);
  if (e.key >= 0  && e.key <= 9) placeInt(e.key);
  if (e.key === ".") placeInt(e.key);
  if (e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+") placeOperator(e.key);
  if (e.key === "Escape" || e.key === "Backspace") clear();
  if (e.key === "=" || e.key === "Enter") calculate();
}

function placeInt(num){
  newText.textContent = '';
  if (storedValue.includes(".") && num.textContent === "." || storedValue.includes(".") && num === "."){
    newText.textContent = '';
  }  
  else if(typeof num === typeof "number") storedValue += num;
  else storedValue += num.textContent;
  newText.textContent += storedValue;
}

function placeOperator(operator){
  if(storedValue){
    oldText.textContent = '';
    if(operator === "/" || operator === "*" || operator === "-" || operator === "+") storedOperator = operator;
    else storedOperator = operator.textContent;
    newText.textContent += ' ' + storedOperator;
    oldText.textContent += storedValue;
    storedValue = '';
  }
}

function clear(){
  storedValue = '';
  newText.textContent = '0';
  oldText.textContent = '0';
}

integers.forEach((item) => {
  item.addEventListener('click', () => {
    placeInt(item);
  })
})

operators.forEach((item) => {
  item.addEventListener('click', () => {
    calculate();
    placeOperator(item);
  })
})

clrBtn.addEventListener('click', () => {
  clear();
})

equalsBtn.addEventListener('click', calculate);

window.addEventListener('keydown', keyPress);





