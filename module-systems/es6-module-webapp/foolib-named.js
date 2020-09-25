export function randomId() {
    return Math.random().toString(16);
}

export let foo = {
    id: randomId(),
    name: "foolib-named"
};

export class Person {
    constructor(name, title) {
        this.name = name;
        this.title = title;
    }
    getFormattedTitle() {
        return `${this.name} ${this.title}`.toUpperCase();
    }
}
