define(['util'], function(util) {
    return {
        MOD_NAME: "mymod",
        start() {
            console.log(util.upper(this.MOD_NAME) + " is starting");
        }
    };
});
