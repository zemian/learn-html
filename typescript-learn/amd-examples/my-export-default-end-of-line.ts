// Compare this against using "export default" in front of a class.
class Hello5b {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}

export default Hello5b;
