define(['knockout'], function (ko) {
    function AppViewModel() {
        let self = this;
        self.message = ko.observable("Hello World");
    }
    return new AppViewModel();
});
