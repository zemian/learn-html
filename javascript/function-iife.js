// When functions are used only once, a common pattern is an
// IIFE (Immediately Invokable Function Expression), so that we can protect
// and use more narrow naming scope to avoid names crash.
(function() {
    console.log("Hello");
})();
