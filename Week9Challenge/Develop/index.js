// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What do you want the title of your repository to be?",


},
{
    type: "input",
    name: "description",
    message: "Please write a description of your repository.",
},

{
    type: "list",
    name: "license",
    message: "What license would you want to use for your project?",
    Choices: [
        "MIT",
        "No License",
    ]
},
{
    type: "input",
    name: "contributors",
    message: "Are there are any contributors to your repository?",

},
{
    type: "input",
    name: "testing",
    message: "What command do you want to run a test?",
    default: "npm test",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
