// This script only configure RequireJS and not loading any application code.
requirejs.config({
    baseUrl: "js",
    paths: {
        'jquery': '../../resources/node_modules/jquery/dist/jquery',
        'text': '../../resources/node_modules/requirejs-text/text',
        'css': '../../resources/node_modules/require-css/css',
        'domReady': '../../resources/node_modules/requirejs-domready/domReady'
    }
});
