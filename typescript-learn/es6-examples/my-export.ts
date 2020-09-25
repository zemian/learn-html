export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidatorImpl implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

class Hello {
    message = "World";
    greeting() {
        console.log(this.message);
    }
}
export { Hello };
export { Hello as HelloAlias };

export class Hello2 {
    message = "World2";
    greeting() {
        console.log(this.message);
    }
}

class Hello3 {
    message = "World3";
    greeting() {
        console.log(this.message);
    }
}

// You can't use "export =" while this module contains other "export" statement!
// This only works if you have this were the only statement.
//export = Hello3;
