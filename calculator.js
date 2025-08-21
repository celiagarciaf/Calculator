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
    output.textContent = "";
    outputValue = "";
}

 let clear = document.querySelector(".clear");
clear.addEventListener("click", clearOutput)