export default class Greeter {
    constructor (name) {
        this.name = name;
    }
    greeting () {
        return "Hello " + this.name;
    }
}
