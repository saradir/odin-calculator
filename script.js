let displayValue = '0';
let operandA = null;
let operandB = null;
let operator = null;

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(operator, a, b){
}

function updateDisplay(input){
    display.textContent = input;
}

function handleInput(e){

    /* update display when digits clicked */
    if(e.target.classList.contains("digit")){
        if(displayValue === "0"){
            displayValue = '';
        }
        displayValue += e.target.value;
        updateDisplay(displayValue);
    }

    else if(e.target.classList.contains("operation")){

        if(!operator){
            /* store display value as first operand (and second operand as default) */
            operandA = operandB = Number(displayValue);
            operator = e.target.value;
            /* reset display value, but don't update display yet, in wait for second operand */
            displayValue = ''
        }
    }

    else if(e.target.class="equals"){
        operandB = Number(displayValue);
        calculate();
    }

    else if(e.target.classList.contains("ac")){
        reset();
    }
}

function calculate(){
}

function reset(){
    operandA = 0;
    operandB = 0;
    operator = null;
    displayValue = '0'
    updateDisplay(displayValue);
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".button-box");
buttons.addEventListener("click", (e) => handleInput(e));



