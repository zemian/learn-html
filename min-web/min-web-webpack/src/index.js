// NOTE: This script is written as normal "NodeJS" script, hence we use
// be packaged by build process that will be used in browser env.
// the require("module") to bring in dependencies. But this script will
var $ = require('jquery');
var ko = require("knockout");

$(function() {
  var viewModel = {
    helloMessage: ko.observable("Hello World")
  };
  ko.applyBindings(viewModel);
});
