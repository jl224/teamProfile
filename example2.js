// Problem #2:
// You work for a professional psychic. Unfortunately, this particular psychic has trouble reading minds, which is a service she would like to offer her clients. The psychic hires you to write a script that will correctly guess an unknown integer that has been picked by her client. The script should accept a lower and upper bound which is provided by the client and should use the minimum number of guesses to discover the unknown integer. The unknown integer will always lie within the lower and upper bounds specified by the client. The script should not have access to the unknown integer when the code initially runs. The client can give input in only two ways: specifying the lower and upper bounds; and by answering yes/no questions. Write the code to perform this task.

// High Level Steps
// 2.1	Client picks a 1) number and then 2) a range which holds the number. The client doesn’t tell the system what the number is. 
// 2.2	The system generates a number between the range and provides it to the client. 
// 2.3	The client answers yes if the number is correct, no if it is not correct. 
// 2.4	The system keeps guessing until the client says yes. Goal is to minimize the number of guesses.

// Step 2.1 – Ask for client input on number and range.
var inquirer = require("inquirer");
var fs = require('fs');
var min
var max
var number
console.log("this game is about that pick a random number ")
start()
function start() {
    inquirer.prompt([
        {
            type: 'number',
            name: 'min',
            message: "Pick the minimum boundary."
        },

        {
            type: "number",
            name: "max",
            message: "Pick the maximum boundary."
        }
    ]).then(function (res) {
        min = res.min
        max = res.max
        computerShowNumber()

    })
}

function computerShowNumber() {
    number = Math.floor((max + min) / 2)
    console.log(number)
    askUser()
}

function askUser() {
    inquirer.prompt(
        {
            type: "input",
            name: "choice",
            choices: ["yes", "no"],
            message: "Is correct?"
        }).then(function (res) {
            if (res.choice === "yes") {
                console.log("end")
                start()

            }
            else {
                inquirer.prompt(
                    {
                        type: "input",
                        name: "choice",
                        choices: ["yes", "no"],
                        message: "Is big?"
                    }).then(function (res) {
                        if (res.choice === "yes") {
                            min = number + 1
                        }
                        else {
                            max = number - 1
                        }
                        computerShowNumber()

                    })
            }

        })
}
