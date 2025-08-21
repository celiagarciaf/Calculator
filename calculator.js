function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1/number2;
}

function operate(operator, number1, number2){
    if (operator === "+"){
        return add(number1, number2);
    } else if (operator === "-") {
        return subtract(number1, number2);
    } else if (operator === "*" || operator === "x") {
        return multiply(number1, number2);
    } else {
        if(number2 == 0){
            return "No se puede dividir entre 0."
        } else {
            return divide(number1, number2);
        }
    }
}

let output = document.querySelector(".output");

function clearOutput() {
    output.textContent = "0";
    outputValue = "";
}

 let clear = document.querySelector(".clear");
clear.addEventListener("click", clearOutput)


let numbers = document.querySelectorAll(".number");
let outputValue = "";
numbers.forEach(number => {
    number.addEventListener("click", () => {
        outputValue += number.textContent;
        output.textContent = outputValue;
    })
})


let number1;
let number2;
let operateWith;


let operators = document.querySelectorAll(".operator");
operators.forEach(op => {
    op.addEventListener("click", () => {
        number1 = parseFloat(outputValue);
        operateWith = op.textContent;
        outputValue = "";
        output.textContent = "";
    })
})

let result = document.querySelector(".equal");
result.addEventListener("click", () => {
    number2 = parseFloat(outputValue);
    let finalResult = operate(operateWith, number1, number2);
    output.textContent = finalResult;
    outputValue = finalResult; 
})

