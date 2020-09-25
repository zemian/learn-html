// Old JS (before ES6/ES2015) does not have class, but it has constructor function
function Person (name) {
    this.name = name;
}
Person.prototype.greeting = function () {
    return "Hello " + this.name;
};

var person = new Person("Zemian");
console.log("person", person);
console.log("person.greeting()", person.greeting());
