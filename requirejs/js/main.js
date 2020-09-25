// NOTE that "requriejs" is an alias to "require"! So
// you can just as well use "require.config". I personally think "requirejs"
// is more clear though.
//
// A main.js is usually and can be loaded using data-main attribute in the script
// tag. It also would include the bootstrap code for an application.
requirejs.config({
    baseUrl: "js",

    /*
    NOTE these paths are in relative to the "baseUrl"!
    */
    paths: {
        'jquery': 'https://unpkg.com/jquery@3.5.1/dist/jquery',
        'text': 'https://unpkg.com/requirejs-text@2.0.15/text',
    }
});

require(['jquery', 'text!template.html'], function($, helloMessage){
    $(function(){
        $("#main").html(helloMessage);
    });
});
