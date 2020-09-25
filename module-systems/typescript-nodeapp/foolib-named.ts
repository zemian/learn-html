function randomId() {
    return Math.random().toString(16);
}

let foo = {
    id: randomId(),
    name: "foolib-named"
};

class Person {
    name: string;
    title: string;

    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    getFormattedTitle() {
        return `${this.name} ${this.title}`.toUpperCase();
    }
}

export {randomId, foo, Person};
