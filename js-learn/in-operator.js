// Use 'in' operator to check property exists in object or not
var person = {
    name: "Zemian"
};
console.log("'name' in person", 'name' in person);
console.log("'age' in person", 'age' in person);

// 'in' operator works on all properties, including attributes and functions.

class Person {
    constructor (name) {
        this.name = name;
    }
    greeting () {
        return "Hello " + this.name;
    };
}

var person = new Person("Zemian");
console.log("'name' in person", 'name' in person);
console.log("'age' in person", 'age' in person);
console.log("'greeting' in person", 'greeting' in person);

class Employee extends Person {
    constructor (name, title) {
        super(name);
        this.title = title;
    }
}

var person = new Employee("Zemian", "Developer");
console.log("'name' in person", 'name' in person);
console.log("'age' in person", 'age' in person);
console.log("'greeting' in person", 'greeting' in person);
console.log("'title' in person", 'name' in person);
