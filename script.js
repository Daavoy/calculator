const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    if (operator == "add") {
        return add(a, b);
    } else if (operator == "subtract") {
        return subtract(a, b);
    } else if (operator == "multiply") {
        if (a === 0 || b === 0) {
            alert("cannot multiply by zero");
            clear();
        }
        return multiply(a, b);
    } else if (operator == "divide") {
        if (a === 0 || b === 0) {
            alert("cannot divide by zero");
            clear();
        }
        return divide(a, b);
    }
};


const display = document.querySelector(".display");
const numBtn = document.querySelectorAll(".numbers");
const opBnt = document.querySelectorAll(".operators");
var operand = null;
var secondOperand = null;

var dispOne = null;
var dispTwo = null;
var dispValue = 0;

display.textContent=dispValue;

function clear() {
    operand = null;
    secondOperand = null;
    dispOne = null;
    dispTwo = null;
    display.textContent = "";
    dispValue = 0;
};

numBtn.forEach((btn) =>
    btn.addEventListener("click", function () {
        if(display.textContent == 0){
            clear();
        }
        display.textContent += btn.value;
        if (secondOperand === null) {
            dispOne = display.textContent;
        } else {
            dispTwo = display.textContent;
        }
    }));

opBnt.forEach((btn) =>
    btn.addEventListener("click", function() {
        if (btn.value === "c") {
            clear();
        }
        if (btn.value == "=") {

        }
        // if (operand === null) {
        //     operand = btn.value();
        // } else {
        //     secondOperand = btn.value();
        // }
    }));