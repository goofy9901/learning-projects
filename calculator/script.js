"use strict";

const body = document.querySelector("body");

const operators = (function () {
  return {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },
  };
})();

let num1 = 0;
let num2 = 0;
let operator = ["+", "-", "*", "/"];

const operate = function () {
  if (num1 + num2) {
    return operators.add();
  } else if (num1 - num2) {
    return operators.subtract();
  }
  if (num1 * num2) {
    return operators.multiply();
  }
  if (num1 / num2) {
    return operators.divide();
  }
};

const calculator = document.createElement("div");
body.appendChild(calculator);
calculator.classList = "calculator";
const display = document.createElement("div");
calculator.appendChild(display);
display.classList = "display";
const numbers = document.createElement("div");
calculator.appendChild(numbers);
numbers.classList = "numbers";

for (let i = 0; i < 16; i++) {
  const field = document.createElement("div");
  numbers.appendChild(field);
  field.classList = "field";
}
