// This script only configure RequireJS and not loading any application code.
requirejs.config({
    baseUrl: "js",
    paths: {
        'jquery': 'https://unpkg.com/jquery@3.5.1/dist/jquery',
        'text': 'https://unpkg.com/requirejs-text@2.0.15/text',
        'css': 'https://unpkg.com/require-css@0.1.10/css',
        'domReady': 'https://unpkg.com/requirejs-domready@2.0.3/domReady',
    }
});
