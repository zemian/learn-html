define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function randomId() {
        return Math.random().toString(16);
    }
    exports.randomId = randomId;
    let foo = {
        id: randomId(),
        name: "foolib-named"
    };
    exports.foo = foo;
    class Person {
        constructor(name, title) {
            this.name = name;
            this.title = title;
        }
        getFormattedTitle() {
            return `${this.name} ${this.title}`.toUpperCase();
        }
    }
    exports.Person = Person;
});
