class EventClickExample {

    name = "EventClickExample";

    constructor () {
        console.log("Setup click listeners");
        document.getElementById("box1").addEventListener('click', this.myClickEvent); // BAD
        document.getElementById("box2").addEventListener('click', this.myClickEvent2); // BAD
        document.getElementById("box3").addEventListener('click', this.myClickEvent3); // GOOD
        document.getElementById("box4").addEventListener('click', EventClickExample.myClickEvent4(this)); // GOOD

        // GOOD
        let self = this;
        document.getElementById("box5").addEventListener('click', function (event) {
            console.log(self.name + " myClickEvent5", event);
        });
    }

    myClickEvent (event) {
        // BAD: The "this" is not bound to class instance! So output is "undefined"
        // This is because the function is an event handler that invoked by
        // event loop without the knowledge of the class instance.
        console.log(this.name + " myClickEvent", event);
    }

    // Class Member
    myClickEvent2 = function (event) {
        // This is same as myClickEvent
        // BAD: The "this" is not bound to class instance! So output is "undefined"
        console.log(this.name + " myClickEvent2", event);
    };

    myClickEvent3 = (event) => {
        // GOOD: This works because FAT arrow function does not affect "this", and it
        // will be pickup by nearby context, which is the class instance
        console.log(this.name + " myClickEvent3", event);
    };

    static myClickEvent4 (ex: EventClickExample) {
        // We are using myClickEvent4 as event handler factory so we can enclose parameter, in this
        // case we want the class instance "ex"
        //
        // NOTE: To use this example myClickEvent4, you need to actually call it!
        return function (event) {
            console.log(ex.name + " myClickEvent4", event);
        }
    }
}
