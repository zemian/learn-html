// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// == JS has many ways to create "objects"
const o1 = {};
const o2 = new Object();
const o3 = Object.create({});
function Person(){} /* Person => Is called the Function Constructor, and you use it with "new" operator. */
const o4 = new Person();
console.log("Empty objects: ", o1, o2, o3, o4);

// == Create non-empty object
function Person2(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const o5 = {firstName: "Zemian", lastName: "Deng"};
const o6 = new Object(Person2);
const o7 = Object.create(Person2);
const o8 = new Person2("Zemian", "Deng");
console.log("Full objects: ", o5, o6, o7, o8);

// == Prototype object and it's chain
// o4.__proto__ => Person.prototype => Object.prototype
console.log("Function constructor's prototype is same as object instance: ", Person.prototype == Object.getPrototypeOf(o4));
console.log("object.__proto__ is same as  Object.getPrototypeOf(object):", o4.__proto__ ==   Object.getPrototypeOf(o4));
console.log("o4.__proto__: ", o4.__proto__);
console.log("o4.__proto__.__proto__: ", o4.__proto__.__proto__);
console.log("o4.__proto__.__proto__.__proto__: ", o4.__proto__.__proto__.__proto__);

// == Overriding object properties will break the chain search!
Person.prototype.foo = "bar";
// Note that o4.foo has value even after it was first created, then we add to Person function constructor's prototype.
console.log("Prototype chain value: ", o4.foo, Person.prototype.foo);

// Now change object
o4.foo = "bar2";
const o4b = new Person();
console.log("Prototype chain value: ", o4.foo, o4b.foo, Person.prototype.foo);

