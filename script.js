const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let input = "";
let operator = "";
let num1 = "";
let num2 = "";
let result = "";
buttons.forEach((btn) => {
    btn.onclick = () => {
        if (display.textContent == "") {
            if (btn.id == "0" || btn.id == "1" || btn.id == "2" || btn.id == "3" || btn.id == "4" || btn.id == "5" || btn.id == "6" || btn.id == "7" || btn.id == "8" || btn.id == "9") {
                input = btn.id;
                display.textContent = input;
            }
            else {
                display.textContent = "Invalid Input";
            };
        }
        else {
            if (display.textContent == "Invalid Input") {
                if (btn.id == "0" || btn.id == "1" || btn.id == "2" || btn.id == "3" || btn.id == "4" || btn.id == "5" || btn.id == "6" || btn.id == "7" || btn.id == "8" || btn.id == "9") {
                    input = btn.id;
                    display.textContent = input;
                }
                else {
                    display.textContent = "Invalid Input";
                };
            }
            else {
                if (btn.id == "0" || btn.id == "1" || btn.id == "2" || btn.id == "3" || btn.id == "4" || btn.id == "5" || btn.id == "6" || btn.id == "7" || btn.id == "8" || btn.id == "9") {
                    if (operator == "") {
                        input += btn.id;
                        display.textContent = input;
                    }
                    else {
                        if (result == "") {
                            // After adding operator, the code comes here if i input something again.
                            num2 += btn.id;
                            input += btn.id;
                            display.textContent = input;
                        }
                        else {
                            console.log("Contact Developer");
                        };
                    };
                }
                else {
                    if (num2 == "") {
                        // I'm adding operator here //
                        num1 = input;
                        operator = btn.id;
                        input += operator;
                        display.textContent = input;
                        // Now, i'm done adding the operator //
                    }
                    else {
                        // Now, I can add what will happen when I hit "=" after getting num1, operator, num2 
                        if (btn.id == "=") {
                            // Now, i'll have to add condition if the operator is "+", "-", "*", "/"
                            if (operator == "+") {
                                result = Number(num1) + Number(num2);
                                display.textContent = result;
                            }
                            else if (operator == "-") {
                                result = Number(num1) - Number(num2);
                                display.textContent = result;
                            }
                            else if (operator == "*") {
                                result = Number(num1) * Number(num2);
                                display.textContent = result;
                            }
                            else if (operator == "/") {
                                result = Number(num1) / Number(num2);
                                display.textContent = result;
                            }
                        }
                        // Or, what will happen if I hit hit "+", "-", "*", "/" after getting num1, operator, num2;

                        else if (btn.id == "+") {
                            if (operator == "+") {
                                input = Number(num1) + Number(num2);

                                num1 = input
                                operator = "+";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "-") {
                                input = Number(num1) - Number(num2);

                                num1 = input
                                operator = "+";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "*") {
                                input = Number(num1) * Number(num2);

                                num1 = input
                                operator = "+";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "/") {
                                input = Number(num1) / Number(num2);

                                num1 = input
                                operator = "+";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                        }

                        else if (btn.id == "-") {
                            if (operator == "+") {
                                input = Number(num1) + Number(num2);

                                num1 = input
                                operator = "-";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "-") {
                                input = Number(num1) - Number(num2);

                                num1 = input
                                operator = "-";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "*") {
                                input = Number(num1) * Number(num2);

                                num1 = input
                                operator = "-";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "/") {
                                input = Number(num1) / Number(num2);

                                num1 = input
                                operator = "-";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                        }

                        else if (btn.id == "*") {
                            if (operator == "+") {
                                input = Number(num1) + Number(num2);

                                num1 = input
                                operator = "*";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "-") {
                                input = Number(num1) - Number(num2);

                                num1 = input
                                operator = "*";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "*") {
                                input = Number(num1) * Number(num2);

                                num1 = input
                                operator = "*";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "/") {
                                input = Number(num1) / Number(num2);

                                num1 = input
                                operator = "*";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                        }

                        else if (btn.id == "/") {
                            if (operator == "+") {
                                input = Number(num1) + Number(num2);

                                num1 = input
                                operator = "/";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "-") {
                                input = Number(num1) - Number(num2);

                                num1 = input
                                operator = "/";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "*") {
                                input = Number(num1) * Number(num2);

                                num1 = input
                                operator = "/";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }
                            else if (operator == "/") {
                                input = Number(num1) / Number(num2);

                                num1 = input
                                operator = "/";
                                num2 = "";
                                result = "";

                                input = num1 + operator;
                                display.textContent = input;
                            }

                        }

                        else {
                            display.textContent = "Ask Admin";
                        }

                    };
                };

            };

        };

    };
});

const clear = buttons[0];
clear.onclick = () => {
    display.textContent = "";
    input = "";
    operator = "";
    num1 = "";
    num2 = "";
    result = "";
    console.clear();
};