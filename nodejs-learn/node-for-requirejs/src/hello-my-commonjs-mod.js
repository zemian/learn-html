let requirejs = require('requirejs');
requirejs(['lib/my-commonjs-mod'], function (MyCommonJSMod) {
    let x = new MyCommonJSMod();
    console.log("myCommonJSMod.greeting()", x.greeting());
});
