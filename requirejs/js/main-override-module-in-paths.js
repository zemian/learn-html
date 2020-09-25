requirejs.config({
    baseUrl: "js",
    paths: {
        'hello': 'mymod1/hello', /* We are overriding the "js/hello.js" */
        'jquery': 'https://unpkg.com/jquery@3.5.1/dist/jquery',
        'text': 'https://unpkg.com/requirejs-text@2.0.15/text',
    }
});
