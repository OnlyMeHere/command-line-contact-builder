// Constructor function to create Employee Object
// that will be the parent object of Manager, Engineer and Intern.

function Employee(name, id, email, role) {

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.getname = () => {
        console.log(`name: ${this.name}`);
    };
    this.getId = () => {
        console.log(`ID: ${this.id}`);
    };
    this.getEmail = () => {
        console.log(`Email: ${this.email}`);
    };
    this.getRole = () => {
        console.log(`Employee Role: ${role}`);
    };

};

module.exports = Emlpoyee;


