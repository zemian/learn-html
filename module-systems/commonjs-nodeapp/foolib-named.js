function randomId() {
    return Math.random().toString(16);
}

let foo = {
    id: randomId(),
    name: "foolib-named"
};

class Person {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    getFormattedTitle() {
        return `${this.name} ${this.title}`.toUpperCase();
    }
}

exports.randomId = randomId;
exports.foo = foo;
exports.Person = Person;
