/// <reference path="namespace-mylib1.ts" />
namespace nsmylib {
    export class NsMyLibHello {
        name = "World"

        greeting() {
            return "Hello " + this.name;
        }
    }
}
