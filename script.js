let a = "";
let b = "";
let displayNum = "";
let operation = "";
const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const operators = document.querySelectorAll(".operator");
const equalsS = document.querySelector("#equals");
const clear = document.querySelector("#clear");

document.addEventListener("keydown", () => {
    if (event.key >= 0 && event.key <= 9) {
        updateDisplay(event.key)
    } else if (event.key === "+" || event.key === "-" ||
        event.key === "*" || event.key === "/") {
        a = displayNum;
        displayNum = "";
        operation = event.key;
    } else if (event.keyCode === 13 || event.key === "=") {
        equals();
    } else if (event.keyCode == 8 || event.keyCode == 46) {
        reset();
        display.innerHTML = 0;
    }
})

//EVENT LISTENERS
numbers.forEach(number => {
    number.addEventListener("click", () => {
        updateDisplay(number.innerHTML);
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        a = displayNum;
        displayNum = "";
        operation = operator.innerHTML;
    })
})

equalsS.addEventListener("click", () => {
    equals()
});

clear.addEventListener("click", () => {
    reset();
    display.innerHTML = 0;
});

//Operations
function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }

}

function updateDisplay(nextDigit) {
    console.log("UPDATING")
    displayNum += nextDigit;
    display.innerHTML = parseInt(displayNum);
}

function reset() {
    console.log("RESET")
    a = "";
    b = "";
    displayNum = "";
}

function equals() {
    console.log(a + "   " + displayNum)
    if (a === "" || displayNum === "") {
        display.innerHTML = "ERROR"
        reset();
        return
    }

    b = displayNum;
    console.log(a + " " + b + "  " + operation)
    displayNum = operate(operation, a, b);
    console.log(displayNum)
    display.innerHTML = parseInt(displayNum);
    console.log(display.innerHTML);

    reset()
}