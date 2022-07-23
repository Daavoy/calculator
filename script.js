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
        return multiply(a, b);
    } else if (operator == "divide") {
        return divide(a, b);
    }
};
var dispValue = null;
const display = document.querySelector(".display");
const numBtn = document.querySelectorAll(".numbers");
const opBtn = document.querySelectorAll(".operators");
const clear = () => display.textContent="";

numBtn.forEach((btn) =>{
    btn.addEventListener("click", function(){
        display.textContent += btn.value;
        dispValue = display.textContent;
    });
});
opBtn.forEach((btn) =>{
    btn.addEventListener("click", function(){
        clear();
    });
});