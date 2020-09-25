// NOTE: We are in browser env, so DOM API and all global "window" vars are available

// This script is loaded by index.html, which include the following libraries
// - RequireJS, Knockout and jQuery. So we are free to use these.

requirejs.config({
    baseUrl: './',
    paths: {
        'jquery': 'web/js/libs/jquery/jquery',
        'knockout': 'web/js/libs/knockout/knockout-latest.debug'
    }
});

require(['jquery', 'knockout'], function($, ko) {
    $(function() {
        var viewModel = {
            helloMessage: ko.observable("Hello World")
        };
        ko.applyBindings(viewModel);
    });
});
