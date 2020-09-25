define(function () {
    function randomId() {
        return Math.random().toString(16);
    }

    let foo = {
        id: randomId(),
        name: "foolib-objects"
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

    return {randomId, foo, Person};
});
