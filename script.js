const calculation = () => {
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

console.log(calculation());