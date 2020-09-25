// NOTE: We are in browser env, so DOM API and all global "window" vars are available

// This script is loaded by index.html, which include the following libraries
// - RequireJS, Knockout and jQuery. So we are free to use these.

requirejs.config({
    paths: {
        'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min',
        'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.0/knockout-min'
    }
});

require(['jquery', 'knockout'], function($, ko) {
    var viewModel = {
        helloMessage: ko.observable("Hello World")
    };

    $(function() {
        ko.applyBindings(viewModel);
    });
});
