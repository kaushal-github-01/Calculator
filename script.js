const operate = () => {
    let num1 = Number(prompt("Enter 1st number"));
    let operator = prompt("Enter operator");
    let num2 = Number(prompt("Enter 2nd number"));

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

// console.log(operate());

const buttons = document.querySelectorAll('.buttons button');
const display = document.querySelector('.display');

console.log(buttons);

buttons.forEach((btn) => {
    btn.onclick = () => {
        display.textContent = btn.id;
    };
});

const clear = buttons[0];
clear.onclick = () => {
    display.textContent = "";
    console.clear();
}