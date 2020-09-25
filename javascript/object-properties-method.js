// Common pattern to define JS object using constructor function is
// to add properties in constructor and then add methods into prototype

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// Constructor with property definitions

function Test(a, b, c, d) {
    // property definitions
    this.myList = [a, b, c, d];
}

// First method definition

Test.prototype.x = function() {
    console.log(this.myList);
};

// Second method definition

Test.prototype.y = function() {
    console.log(this.myList.map(function (item) { return item * 2}));
};

// etc.
