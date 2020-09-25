//console.log("Loading script programmatically through JS");

// // Test Case 1
// let script = document.createElement('script');
// script.type = "text/javascript";
// script.src = "https://unpkg.com/lodash@4.17.15/lodash.js";
// script.async = false;
// document.head.appendChild(script);
// console.log("Lodash version " + _.VERSION);

// // Test Case 2
// let script = document.createElement('script');
// script.type = "text/javascript";
// script.src = "https://unpkg.com/requirejs@2.3.6/require.js";
// script.async = false;
// document.head.appendChild(script);
// console.log("RequireJS version ", requirejs);

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src = src;
    script.async = false;
    script.onload = callback;
    document.head.appendChild(script);
}
