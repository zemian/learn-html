import { Hello, StringValidator} from "./my-export";
console.log(Hello);

class MyStringValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return false;
    }
}
let a : StringValidator = new MyStringValidator();
console.log(a);
