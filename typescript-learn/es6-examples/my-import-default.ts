// Notice because of "export default", we can import it in different form!

import Hello4 from "./my-export-default";

// Or even rename it!
import hello4Default from "./my-export-default";

// Note that you can't import it using bracket style!
// import { Hello4 } from "./my-export-default";

console.log(Hello4);
console.log(hello4Default);
