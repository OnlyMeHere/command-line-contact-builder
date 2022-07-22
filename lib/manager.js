// Constructor function called to extend Employee Class to Manager
// adding office number.

class Manager extends Employee {
    constructor(name, id, email, role) {

        super(name, id, email, office);
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.role = manager
        this.getname = () => {
            console.log(`name: ${this.name}`);
        };
        this.getId = () => {
            console.log(`ID: ${this.id}`);
        };
        this.getEmail = () => {
            console.log(`Email: ${this.email}`);
        };
        this.getOfficeNo = () => {
            console.log(`Office No: ${this.office}`);
        }
    };

};

module.export = Manager