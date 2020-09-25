requirejs.config({
    baseUrl: "js",
    paths: {
        'hello': 'mymod1/hello', /* We are overriding the "js/hello.js" */
        'jquery': '../../resources/node_modules/jquery/dist/jquery',
        'text': '../../resources/node_modules/requirejs-text/text'
    }
});
