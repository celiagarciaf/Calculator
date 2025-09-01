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
function roundNumber(result){
    return Math.round(result * 1000) / 1000;
}

function operate(operator, number1, number2){
    if (operator === "+"){
        return roundNumber(add(number1, number2));
    } else if (operator === "-") {
        return roundNumber(subtract(number1, number2));
    } else if (operator === "*" || operator === "x") {
        return roundNumber(multiply(number1, number2));
    } else {
        if(number2 == 0){
            return "No se puede dividir entre 0.";
        } else {
            return roundNumber(divide(number1, number2));
        }
    }
}

let output = document.querySelector(".output");
let outputValue = "";
let number1;
let number2;
let operateWith;
let number2Last;
let calculated = false; 

function clearOutput() {
    output.textContent = "0";
    outputValue = "";
    number1 = undefined;
    number2 = undefined;
    operateWith = undefined;
    number2Last = undefined;
    calculated = false;
}

let clear = document.querySelector(".clear");
clear.addEventListener("click", clearOutput);

let numbers = document.querySelectorAll(".number");
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (calculated) { 

            outputValue = "";
            calculated = false;
        }
        outputValue += number.textContent;
        output.textContent = outputValue;
    });
});


let operators = document.querySelectorAll(".operator");
operators.forEach(op => {
    op.addEventListener("click", () => {
        if (number1 !== undefined && operateWith && outputValue !== ""){
            number2 = parseFloat(outputValue);
            let currentResult = operate(operateWith, number1, number2);
            output.textContent = currentResult;
            number1 = currentResult;
            outputValue = "";
        } else {
            number1 = parseFloat(outputValue);
            outputValue = "";
        }    
        operateWith = op.textContent;
        calculated = false;
    });
});

// 🔹 Igual
let result = document.querySelector(".equal");
result.addEventListener("click", () => {
    if (!operateWith) return; 

    if (outputValue !== "") {
        number2 = parseFloat(outputValue);
        number2Last = number2; 
    } else if (number2Last !== undefined) {
        number2 = number2Last; 
    } else {
        return; 
    }

    let finalResult = operate(operateWith, number1, number2);
    output.textContent = finalResult;
    outputValue = finalResult.toString(); 
    number1 = finalResult;
    calculated = true; 
});
