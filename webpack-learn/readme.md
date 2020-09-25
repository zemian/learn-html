## Webpack

At its core, webpack is a static module bundler for modern JavaScript applications.

https://webpack.js.org


## Getting started

    mkdir webpack-demo
    cd webpack-demo
    npm init -y
    npm install webpack webpack-cli --save-dev
    npx webpack

To work with default webpack structure, create the following:

    src/index.js
    dist/index.html # Use <script src="main.js"></script> instead
    
To add dependency:

    1. Run `npm install <lib-name> -save`
    2. Write `import <name> from "<lib-name>"` in index.js
