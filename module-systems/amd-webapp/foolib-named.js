// This is the CommonJS way of exporting vars, which is supported by RequireJS
// as wrapper function.
// A more direct RequireJS style is simply to use a return statement. See "foolib-objects.js"
define(function (require, exports, module) {
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
});
