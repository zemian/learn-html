/*
There is actually 4 ways to subclass (creating JS prototype chain), and Object.create()
is only one of them. However 2 of them are not recommended.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 */

// == Using Object.create()

// Old JS (before ES6/ES2015) does not have class, but it has constructor function
function Person (name) {
    this.name = name;
}
Person.prototype.greeting = function () {
    return "Hello " + this.name;
};

// Define sub-class
function Employee (name, title) {
    Person.call(this, name);
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

var employee = new Employee("Zemian", "Developer");
console.log("employee", employee);
console.log("employee.greeting()", employee.greeting());

// == Using New-Initialization
function example2() { // create namespace
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greeting = function () {
        return "Hello " + this.name;
    };
    function Employee(name, title) {
        Person.call(this, name);
        this.title = title;
    }
    Employee.prototype = new Person('base');
    Employee.prototype.constructor = Employee;

    console.log("Example2");
    var employee = new Employee("Zemian", "Developer");
    console.log("employee", employee);
    console.log("employee.greeting()", employee.greeting());
}
example2();
