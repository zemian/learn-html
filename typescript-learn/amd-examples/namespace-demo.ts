// NOTE: You have to export the namespace to let user to import it!
export namespace mynsdemo {
    export class Hello {
        name = "World";
        greeting() {
            return "Hello " + this.name;
        }
    }
    export class Hello2 extends Hello {
        greeting() {
            return "Hi " + this.name;
        }
    }
}
