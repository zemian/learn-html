var EventClickExample = /** @class */ (function () {
    function EventClickExample() {
        var _this = this;
        this.name = "EventClickExample";
        // Class Member
        this.myClickEvent2 = function (event) {
            // This is same as myClickEvent
            // BAD: The "this" is not bound to class instance! So output is "undefined"
            console.log(this.name + " myClickEvent2", event);
        };
        this.myClickEvent3 = function (event) {
            // GOOD: This works because FAT arrow function does not affect "this", and it
            // will be pickup by nearby context, which is the class instance
            console.log(_this.name + " myClickEvent3", event);
        };
        console.log("Setup click listeners");
        document.getElementById("box1").addEventListener('click', this.myClickEvent);
        document.getElementById("box2").addEventListener('click', this.myClickEvent2);
        document.getElementById("box3").addEventListener('click', this.myClickEvent3);
        document.getElementById("box4").addEventListener('click', EventClickExample.myClickEvent4(this));
        var self = this;
        document.getElementById("box5").addEventListener('click', function (event) {
            console.log(self.name + " myClickEvent5", event);
        });
    }
    EventClickExample.prototype.myClickEvent = function (event) {
        // BAD: The "this" is not bound to class instance! So output is "undefined"
        // This is because the function is an event handler that invoked by
        // event loop without the knowledge of the class instance.
        console.log(this.name + " myClickEvent", event);
    };
    EventClickExample.myClickEvent4 = function (ex) {
        // We are using myClickEvent4 as event handler factory so we can enclose parameter, in this
        // case we want the class instance "ex"
        //
        // NOTE: To use this example myClickEvent4, you need to actually call it!
        return function (event) {
            console.log(ex.name + " myClickEvent4", event);
        };
    };
    return EventClickExample;
}());
