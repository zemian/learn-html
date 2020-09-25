// NOTE: When using "export =", we will not create the the named global variable
// but letting user to re-assign with any name during import!
namespace mynssingleton {
    export let name = "Hello";

    class Hello {
        name = "World";
        greeting() {
            return "Hello " + this.name;
        }
    }
    export let hello = new Hello();
}
export = mynssingleton;
