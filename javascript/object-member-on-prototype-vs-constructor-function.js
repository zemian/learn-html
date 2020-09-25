// Compare this greeting definition
// Note when creating two instances, two function will be created!
function Person(name) {
    this.name = name;
    this.greeting = function () {
        return "Hello " + this.name;
    }
}
console.log(new Person("one"), new Person("two"));

// Now versus this prototype greeting definition
// Note when creating two instances, only one function will be created!
function Person2(name) {
    this.name = name;
}
Person2.prototype.greeting = function () {
    return "Hello " + this.name;
};
console.log(new Person2("one"), new Person2("two"));
