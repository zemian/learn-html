// Demonstration on loading ckeditor using requirejs.

// requirejs.config({
//     baseUrl: "js",
//
//     /*
//     NOTE these paths are in relative to the "baseUrl"!
//     */
//     paths: {
//         'jquery': '../../resources/node_modules/jquery/dist/jquery',
//         'text': '../../resources/node_modules/requirejs-text/text',
//         'ckeditor': '../../resources/node_modules/ckeditor/classic/ckeditor'
//     }
// });

var CKEDITOR_BASEPATH = '../../resources/node_modules/ckeditor/classic';
require(['jquery', 'ckeditor'], function($, ckeditor){
    $(function(){
        console.log("CKEditor demo: " + ckeditor);
    });
});
