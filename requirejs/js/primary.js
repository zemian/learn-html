
define('util2',
    [], function() {
        return {
            upper(msg) {
                console.log("Using util from primary.js:");
                return msg.toUpperCase();
            }
        };
    });

define('main2',
    ['util2'], function(util) {
        return {
            MOD_NAME: "mymod",
            start() {
                console.log(util.upper(this.MOD_NAME) + " is starting");
            }
        };
    });

define('text2',
    ['text'], function(text) {
        console.log("Loading text module.");
        console.log(text);

        return {};
    });

