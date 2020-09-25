requirejs.config({
    baseUrl: '../resources/node_modules/jquery-ui/ui/',
    paths: {
        'jquery': '../../jquery/dist/jquery',
        'jquery-ui': 'widgets'
    }
});
require([ "jquery-ui/autocomplete" ], function( autocomplete ) {
    autocomplete({ source: [ "One", "Two", "Three" ] }, "<input>" )
        .element
        .appendTo( "body" );
});
