// Is there difference between start() in Car1 and Car2?
// Answer: YES
// See https://stackoverflow.com/questions/310870/use-of-prototype-vs-this-in-javascript
//
// Car2 instances will have a shared function, while each Car1 instances will
// have a new copy of the function.
//
function Car1() {
    this.start = function () {
        console.log("Starting car.");
    }
}
function Car2() {}
Car2.prototype.start = function () {
    console.log("Starting car.");
};
let car1a = new Car1();
let car1b = new Car1();
let car2a = new Car2();
let car2b = new Car2();
console.log('car1a.start === car1b.start', car1a.start === car1b.start);
console.log('car2a.start === car2b.start', car2a.start === car2b.start);
