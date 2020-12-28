let prev = "0";
let operator = "";
let display = "";

function initialiseHandlers() {
    let keys = document.querySelectorAll(".key");

    for(let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', () => {
            updateDisplay(keys[i].textContent);
        })
    }
}


function updateDisplay(input) {
    console.log("PREV:" + prev, " OPERATor:" + operator, " DISPLAY:" + display);
    let displayDiv = document.getElementById("display");

    if(!isNaN(input)) {
        display = display.concat(input);
        displayDiv.innerText = display;
        return;
    }

    let operators = ["+", "-", "*", "/"];

    if(operators.includes(input)) {
        prev = displayDiv.innerText;
        operator = input;
        display = "";
        return;
    }

    if(input === "C") {
        display = "";
        displayDiv.innerText = "0";
        return;
    }

    if(input === "=") {
        if(display === "") {
            displayDiv.innerText = "MissingOperand";
            prev = "0";
            operator = "";
            display = "";
            return;
        }   

        let operand1 = parseInt(prev);
        let operand2 = parseInt(display);
        
        switch(operator) {
            case "+":
                display = operand1 + operand2;
                break;
            case "-":
                display = operand1 - operand2;
                break;
            case "*":
                display = operand1 * operand2;
                break;
            case "/":
                display = operand1 / operand2;
                break;
            default:
        }

        displayDiv.innerText = display;

        prev = "0";
        operator = "";
        display = "";
    }
}


initialiseHandlers();