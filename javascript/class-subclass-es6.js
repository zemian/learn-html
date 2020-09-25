// ES6 class syntax
class Person {
    constructor (name) {
        this.name = name;
    }
    greeting () {
        return "Hello " + this.name;
    };
}

// Define sub-class
class Employee extends Person {
    constructor (name, title) {
        super(name);
        this.title = title;
    }
}

var employee = new Employee("Zemian", "Developer");
console.log("employee", employee);
console.log("employee.greeting()", employee.greeting());
