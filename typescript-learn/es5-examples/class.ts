export class Person {
    name;

    constructor (name) {
        this.name = name;
    }

    greeting () {
        return "Hello " + this.name;
    };
}
var person = new Person("Zemian");
console.log("person", person);
console.log("person.greeting()", person.greeting());

class Employee extends Person {
    title;
    constructor (name, title) {
        super(name);
        this.title = title;
    }
}
var employee = new Employee("Zemian", "Developer");
console.log("employee", employee);
console.log("employee.greeting()", employee.greeting());
