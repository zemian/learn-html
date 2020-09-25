// ES6 class syntax
class Person {
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
