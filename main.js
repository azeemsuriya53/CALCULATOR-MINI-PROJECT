import inquirer from "inquirer";
const answers = {
    numberOne: Number,
    numberTwo: Number,
    operator: String
} = await inquirer.prompt([
    {
        type: "Number",
        name: "numberOne",
        message: "Enter the first number",
    },
    {
        type: "Number",
        name: "numberTwo",
        message: "Enter the second number",
    },
    {
        type: "list",
        name: "operator",
        message: "Enter the operator",
        choices: ["+", "-", "*", "/",]
    }
]);
const { numberOne, operator, numberTwo } = answers;
let result;
switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(`${numberOne} ${operator} ${numberTwo} = ${result}`);
