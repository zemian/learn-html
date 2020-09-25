/*
Nearly all objects in JavaScript are instances of Object;
a typical object inherits properties (including methods) from Object.prototype.

Changes to the Object prototype object are seen by all objects through prototype chaining.

The prototype inheritance chain can be overridden! eg: Using 'Object.setPrototypeOf'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

Many JS engine will provide '__proto__' to access the prototype property. You can also get it
by 'Object.getPrototypeOf()'
 */

console.log("== Object's prototype property");

// All objects created in JS will have a '.prototype' property that inherits from 'Object.prototype'.
console.log("Object.prototype", Object.prototype);
console.log("new Object().foo", new Object().foo);

console.log("== Object instance and prototype");
console.log("Modify Object.prototype.foo");
Object.prototype.foo = 'Foo';
console.log("new Object().foo", new Object().foo);

console.log("== MyObject instance and prototype");
function MyObject() {}
var o1 = new MyObject();
console.log("o1", o1);
console.log("o1.foo", o1.foo);
console.log("o1.prototype", o1.prototype);  // This is null!!!
console.log("MyObject", MyObject);
console.log("MyObject.foo", MyObject.foo);
console.log("MyObject.prototype", MyObject.prototype); // This is the prototype for MyObject class that inherit from Object.prototype
console.log("Object.getPrototypeOf(o1)", Object.getPrototypeOf(o1)); // Same as MyObject.prototype
console.log('Object.getPrototypeOf(o1) == MyObject.prototype', Object.getPrototypeOf(o1) == MyObject.prototype);
console.log("Object.getPrototypeOf(MyObject)", Object.getPrototypeOf(MyObject)); // TODO: What prototype will this be?

// == How to create Object Inheritance with JS prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
var Person = function(name) {
    this.name = name;
    this.canTalk = true;
};

Person.prototype.greet = function() {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name);
    }
};

var Employee = function(name, title) {
    Person.call(this, name);
    this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Employee (child).


Employee.prototype.greet = function() {
    if (this.canTalk) {
        console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
};

var Customer = function(name) {
    Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
                                           //it will take prototype.constructor of Person (parent).
                                           //To avoid that, we set the prototype.constructor to Customer (child).


var Mime = function(name) {
    Person.call(this, name);
    this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
                                   //it will take prototype.constructor of Person (parent).
                                   //To avoid that, we set the prototype.constructor to Mime (child).


var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
