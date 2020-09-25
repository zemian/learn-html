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
        'jquery': '../../resources/node_modules/jquery/dist/jquery',
        'text': '../../resources/node_modules/requirejs-text/text'
    }
});

require(['jquery', 'text!template.html'], function($, helloMessage){
    $(function(){
        $("#main").html(helloMessage);
    });
});
