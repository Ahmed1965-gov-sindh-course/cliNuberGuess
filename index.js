#! /usr/bin/env node
import inquirer from "inquirer";
//step 1: creating math functions for program
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
// step 2: creating questions for user
const questions = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 and 10"
    }
]);
// crating logic for user input
if (questions.userGuess === randomNumber) {
    console.log("You guessed the correct number");
}
else {
    console.log("You guessed the wrong number");
}
