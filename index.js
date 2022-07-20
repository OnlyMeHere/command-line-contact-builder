const fs = require('fs');
const inquirer = require('inquirer');

// first set of questions ask for team manager's name, Emplyee ID, email, & office #.

inquirer
    .prompt([
        {
            type: 'input',
            name: 'mngrName',
            message: 'Enter Team Managers name'
        },
        {
            type: 'input',
            name: 'emplyId',
            message: 'enter Employee ID',
        },
        {
            type: 'input',
            name: 'emailAdd',
            message: 'Enter email address',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter office number',
        },
        {
            type: 'list',
            name: 'firstChoice',
            message: 'Choose a team member',
            choices: ['Engineer', 'Intern', 'Generate Page'],

        },

    ])
    .then



        // next a menue with options to add and engineer or intern.




// selecting engineer option prompt to enter name, ID, email, & GitHub username.

// then return to the options menue.

// selecting intern option prompts to enter name, ID, school.

// then return to options menue.

// when done then exit the application generates the HTML.