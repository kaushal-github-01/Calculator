const operate = (num1, operator, num2) => {

    if (operator == "+") {
        return num1 + num2;
    }
    else if (operator == "-") {
        return num1 - num2;
    }
    else if (operator == "*") {
        return num1 * num2;
    }
    else if (operator == "/") {
        return num1 / num2;
    }
    else {
        return "Please only enter: +, -, * or /";
    }
};

const buttons = document.querySelectorAll('.buttons button');
const display = document.querySelector('.display');

let input = "";

buttons.forEach((btn) => {
    btn.onclick = () => {
        input += btn.id
        display.textContent = input;
    };
});

const delimiters = /(\d+|[+\-*\/])/g;

const equal = buttons[2];
equal.onclick = () => {
    const parts = input.match(delimiters);
    let num1 = Number(parts[0]);
    let operator = parts[1];
    let num2 = Number(parts[2]);
    display.textContent = operate(num1, operator, num2);
};

const clear = buttons[0];
clear.onclick = () => {
    display.textContent = "";
    console.clear();
    input = "";
}