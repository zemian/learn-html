// Adopted from
// https://gist.github.com/fcamblor/cf2abad2afcc0edb9bcec40ed3cf57cd

// TODO: Why the "ready" is not called?

function isFunction(it) {
    return Object.prototype.toString.call(it) === '[object Function]';
}

window.__requirejsDebug = {
    defined: [],
    ready: []
};
var __oldDefine = define;
define = function(moduleName, deps, ready) {
    console.log("Calling define() with arguments : ", arguments);
    window.__requirejsDebug.defined.push(arguments);

    if(!isFunction(ready)) {
        ready = deps;
        deps = null;
    }

    return __oldDefine(moduleName, deps, function() {
        console.log(moduleName+" is READY !");
        window.__requirejsDebug.ready.push(arguments);

        return ready.apply(this, arguments);
    });
};
