// NOTE: You shouldn't repeat two "from" since it will generate in "define" function
// But it will continue to work though.

import { Hello } from "./my-export";
import { Hello as HelloAgain } from "./my-export";
console.log(Hello);
console.log(HelloAgain);
