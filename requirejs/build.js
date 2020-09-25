/*

# Generate a optimized JS bundle file that can minimize module code.
#
# The "r.js" is actually a executable command! It will come packaged when
# you run "npm install -g requirejs"
#
# Using "r.js" command:
#   - See https://github.com/requirejs/r.js
#   - The "-o" option is for optimize
#   - The command can take RequireJS configuration as options


# Example of bundle and minify one file:
#   - The "name" is the single entry point to the application (eg: main.js)
r.js -o baseUrl=. name=js/main-config.js out=js/temp-optimized-main.js

# Example of using `build.js`:
r.js -o build.js

# Generate bundle with out minify
r.js -o build.js optimize=none

 */


/* Example of build.js */

/*
// TODO: When building with ckeditor we get error:
 zedeng-mac:requirejs-learn zedeng$ r.js -o build.js

 Tracing dependencies for: build-ckeditor-demo
 Error: Parse error using esprima for file: /Users/zedeng/src/vbcs/html-starter/resources/js/libs/ckeditor/classic/ckeditor.js
 TypeError: Cannot read property 'type' of undefined
 In module tree:
 build-ckeditor-demo

 Error: Error: Parse error using esprima for file: /Users/zedeng/src/vbcs/html-starter/resources/js/libs/ckeditor/classic/ckeditor.js
 TypeError: Cannot read property 'type' of undefined
 In module tree:
 build-ckeditor-demo

 at /usr/local/lib/node_modules/requirejs/bin/r.js:27728:47

 Solution? Need to use CKEditor for ES5 instead?
*/
({
    baseUrl: "js",
    paths: {
        'text': '../../resources/node_modules/requirejs-text/text',
        'css': '../../resources/node_modules/require-css/css',
        'domReady': '../../resources/node_modules/requirejs-domready/domReady',
        //'jquery': 'empty:',
        'jquery': '../../resources/node_modules/jquery/dist/jquery',
        'ckeditor': '../../resources/node_modules/ckeditor/classic/ckeditor'
    },

    shim: {
        "ckeditor": {
            exports: "ckeditor"
        }
    },

    // name: "build-main",
    name: "build-ckeditor-demo",
    out: "temp-main.js"
})

