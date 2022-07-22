const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage.js');

teamCo = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager Name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Manager ID Number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Managers email',
        },
        {
            type: 'input',
            name: 'officeNo',
            message: 'Office Number',
        },
    ])
    .then((data) => {
      fs.writeFile(managerID).json
    });

