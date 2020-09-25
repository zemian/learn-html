import * as nsmylib2 from "./namespace-mylib2";
export class NsMyLibHello {
    name = "World";
    greeting() {
        return "Hello " + this.name;
    }
}

nsmylib2.NsMyLibHello = NsMyLibHello;
