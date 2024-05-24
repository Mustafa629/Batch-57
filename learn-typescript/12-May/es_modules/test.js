import inquirer from "inquirer";
const questions = await inquirer.prompt({ type: "number",
    name: "num1",
    message: "Enter your number"
});
console.log(questions);
