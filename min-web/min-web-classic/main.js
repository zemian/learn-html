// NOTE: We are in browser env, so DOM API and all global "window" vars are available
// See https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#demo").textContent = "Hello World.";
});
