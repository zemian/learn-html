## Different JS Module Systems

- ES6(ES2015) import/export modules
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
  
- System.register ES5 polyfill for ES6 modules
    
- AMD - RequireJS
  * https://requirejs.org
  * https://requirejs.org/docs/commonjs.html
  
- CommonJS - NodeJS
  * https://nodejs.org/docs/latest/api/modules.html
  * Global vars: require, exports, module
  * Be aware of module.exports vs exports
  
- UMD
  * https://github.com/umdjs/umd
  * https://github.com/umdjs/umd/blob/master/templates/amdWeb.js

- TypeScript import/export
  * https://www.typescriptlang.org/docs/handbook/modules.html
  * https://www.typescriptlang.org/docs/handbook/modules.html#export
  * https://www.typescriptlang.org/docs/handbook/modules.html#import
  * https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require

## Extra Readings:

- https://www.sitepoint.com/understanding-module-exports-exports-node-js/

## What is "module.export"

In many JS tools configuration files (eg: webpack.config.js, babel.config.js, karma.config.js etc)
are written directly in JS file with "module.exports = {...}", so what's that?

The "module.exports" is the CommonJS way of exporting a SINGLE object in a module.
