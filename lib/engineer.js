// Constructor function called to extend Employee Class to Engineer
// adding github user-name.

class Engineer extends Employee {
    constructor(name, id, email) {

        super(name, id, email, gitHub);
        this.name = nameEng;
        this.id = idEng;
        this.email = emailEng;
        this.github = github;
        this.getname = () => {
            console.log(`name: ${this.nameEng}`);
        };
        this.getId = () => {
            console.log(`ID: ${this.idEng}`);
        };
        this.getEmail = () => {
            console.log(`Email: ${this.emaileng}`);
        };
        this.getGitHub = () => {
            console.log(`gitHub: ${this.github}`);
        }
    };



};

module.exports = Engineer
