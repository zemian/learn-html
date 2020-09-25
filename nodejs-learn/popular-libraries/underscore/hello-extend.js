const _ = require("underscore");

let parent = {
    message: "Hello",
    loMessage: function() { return this.message.toLowerCase() }
};
let child = {name: "World"};
_.extend(child, parent);
console.log(child.message + " " + child.name);
console.log(child.loMessage());
