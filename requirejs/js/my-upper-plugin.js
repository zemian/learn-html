define(function() {
    return {
        load: function(name, parentRequire, onload, config) {
            console.log("my-plugin is now loading.");
            console.log("parameters:", name, parentRequire, onload, config);

            // This plugin will convert input to Upper case.
            onload(name.toUpperCase());
        }
    }
});
