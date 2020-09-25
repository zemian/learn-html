define(['text!hello-requirejs-comp-recommend.html'], function (html) {
    function ViewModel() {
        this.name = "World";
    }
    return {viewModel: ViewModel, template: html};
});
