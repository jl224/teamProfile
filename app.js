var inquirer = require("inquirer");
var fs = require('fs');
var Manager = require('./lib/Manager')
var Intern = require('./lib/Intern')
var Engineer = require('./lib/Engineer')
var manager = require("./templates/manager")
var intern = require("./templates/intern")
var engineer = require("./templates/engineer")
var main = require("./templates/main")

var team = []

inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is the name of your Manager?",
    },
    {
        name: "ID",
        type: "number",
        message: "What is the ID for the Manager?"

    },

    {
        name: "Email",
        type: "string",
        message: "What is the email for the Manager?"

    },

    {
        name: "officeNumber",
        type: "number",
        message: "What is the office number for the Manager?"

    },

    //Inquirer - Manager
]).then(function (userInput) {
    console.log(userInput)

    team.push(new Manager(userInput.name, userInput.ID, userInput.Email, userInput.officeNumber))
    console.log(team)
    menu()
});

function menu() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like another engineer, intern, or is the team complete?",
            name: "stack",
            choices: [
                "Engineer",
                "Intern",
                "Complete",
            ]
        },

        {
            name: "name",
            type: "input",
            message: "What is the name of the person?",
            when: function (res) {
                return res.stack === "Engineer" || res.stack === "Intern"
            }
        },
        {
            name: "ID",
            type: "number",
            message: "What is their ID?",
            when: function (res) {
                return res.stack === "Engineer" || res.stack === "Intern"
            }

        },

        {
            name: "Email",
            type: "string",
            message: "What is their email?",
            when: function (res) {
                return res.stack === "Engineer" || res.stack === "Intern"
            }
        },

        {
            name: "github",
            type: "input",
            message: "What is the github user ?",
            when: function (res) {
                return res.stack === "Engineer"
            }

        },
        {
            name: "school",
            type: "input",
            message: "What is the name of the school?",
            when: function (res) {
                return res.stack === "Intern"
            }

        },

    ]).then(function (choices) {

        console.log(choices)

        switch (choices.stack) {

            case "Engineer":
                team.push(new Engineer(choices.name, choices.ID, choices.Email, choices.github))
                menu()
                break;

            case "Intern":
                team.push(new Intern(choices.name, choices.ID, choices.Email, choices.school))
                menu()
                break;

            case "Complete":
                buildhtml()
                break;

            default:
                console.log("error")
                menu()



        }

    })

}

function buildhtml() {
    console.log(team)
    var html = main()
    for (i = 0; i < team.length; i++) {
        var role = team[i].getRole()

        switch (role) {

            case "Engineer":
                html = html + engineer(team[i])
                break;

            case "Intern":
                html = html + intern(team[i])
                break;

            case "Manager":
                html = html + manager(team[i])
                break;

        }

    }

    html = html + "</div></body></html>"
    fs.writeFile("team.html", html, function (err) {
        if (err) {
            console.log("error")
        }
        else {
            console.log("success")
        }
    })
}
