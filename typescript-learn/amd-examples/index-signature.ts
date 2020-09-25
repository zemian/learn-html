export class IndexSignatureDemo {
    // This declare "context" to hold string as key index and value can be any data.
    context: {[index:string]: any } = {};

    test() {
        console.log(this.context.foo);
        console.log(this.context['foo']);

        this.context.foo = "bar";
        console.log(this.context.foo);
        console.log(this.context['foo']);

        this.context.foo2 = [1, 3, 2];
        console.log(this.context.foo2);
    }
}
