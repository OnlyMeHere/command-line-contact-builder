// Constructor function to create Employee Object
// that will be the parent object of Manager, Engineer and Intern.

function Employee(name, id, email) {

    this.name = name;
    this.id = id;
    this.email = email;
    this.getname = () => {
        console.log(`name: ${this.name}`);
    };
    this.getId = () => {
        console.log(`ID: ${this.id}`);
    };
    this.getEmail = () => {
        console.log(`Email: ${this.email}`);
    };

}

module.exports = Emlpoyee;


