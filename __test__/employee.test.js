const Employee = require('./employee.js');

describe("Employee", () => {
    it("should return an object containing a 'string' property when called with the 'new' keyword", () => {

        // Act
        const obj = new Employee();

        // Assert
        expect("string" in obj).toEqual(true);
    });




})
