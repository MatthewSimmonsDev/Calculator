const oldText = document.querySelector('.old-text');
const newText = document.querySelector('.new-text');
const operators = document.querySelectorAll('.operator');
const integers = document.querySelectorAll('.number');
const btn = document.querySelectorAll('.btn');
const equalsBtn = document.querySelector('.equals');
const clrBtn = document.querySelector('#clear-button');

let storedValue = '';
let secondValue = '';
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
  newText.textContent = num1 / num2;
  oldText.textContent = num1 + " / " + num2;
}

function toNum(){
  parseOne = parseInt(oldText.textContent);
  parseTwo = parseInt(storedValue);
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
}

integers.forEach((item) => {
  item.addEventListener('click', () => {
    newText.textContent = '';
    storedValue += item.textContent;
    newText.textContent += storedValue;
  })
})

operators.forEach((item) => {
  item.addEventListener('click', () => {
    oldText.textContent = '';
    storedOperator = item.textContent;
    newText.textContent += ' ' + storedOperator;
    oldText.textContent += storedValue;
    storedValue = '';
  })
})

clrBtn.addEventListener('click', () => {
  storedValue = '';
  newText.textContent = '0';
  oldText.textContent = '0';
})

equalsBtn.addEventListener('click', calculate);





