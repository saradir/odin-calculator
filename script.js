let displayValue = '0';
let a = null;
let b = null;
let operator = null;
let state = "continue";
let operatorState = "unlocked"
let displayState = "clear";

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    let result;
    switch(operator){
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }

    return result;
}

function updateDisplay(input){
    if(input){
        display.textContent = input.toString();}
    else {display.textContent = "0";};
    
}

function handleInput(e){

    /* update display when digits clicked */

    if(e.target.classList.contains("digit")){
        if(state === "prereset"){
            reset();
        }
        if(displayState === "clear"){
            displayValue = '';
            displayState = 'show';
        }

        if(operatorState === "locked"){
            operatorState = "unlocked";
        }
        displayValue += e.target.value;
        updateDisplay(displayValue);

    } else if(e.target.classList.contains("operation")){

        if(state === "prereset"){
            state = "continue";
        }

        /* allows only to change operator */
        if(operatorState === "locked"){
            operator = e.target.value;  
            return;
        }

        operatorState = "locked";

        storeValue();

        if(a && b){
            getResult();
            storeValue();
        }
        operator = e.target.value;

    } else if(e.target.id === "equals"){
        if(operatorState === "locked"){
            return;
        }
        if(state === "prereset"){
            return;
        }
        storeValue();
        if(a && b){
            getResult();
        }
        state = "prereset";
    } else if(e.target.classList.contains("ac")){
        reset();
    } else if (e.target.classList.contains("backspace")){
        deleteLastDigit();
    }
}

function getResult(){
    displayValue = operate(operator, a, b);
    updateDisplay(displayValue);
    operator = null;
    a = null;
    b = null;
}

function reset(){
    a = null;
    b = null;
    operator = null;
    displayValue = '0';
    displayState = "clear";
    updateDisplay(displayValue);
}

function deleteLastDigit(){
    displayValue = displayValue.toString().slice(0,-1);
    updateDisplay(displayValue);
}

function storeValue(){
    if(!a){
        a = Number(displayValue);
    } else if(!b) {
        b = Number(displayValue);
    }
    displayState = 'clear';  // clear display for next input
}
const display = document.querySelector(".display");
const buttons = document.querySelector(".button-box");
buttons.addEventListener("click", (e) => handleInput(e));



