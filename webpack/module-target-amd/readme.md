Webpack can be use to package different module systems. This exmaple will package the application for
AMD base module output (for RequireJS). Note that you need to load RequireJS in your index manually to
load the output of the webpack bundle!

## Config docs

https://webpack.js.org/configuration/output/#outputlibrary

The config option for `output.library` and `output.libraryTarget` works together.

To enable AMD, configure like this:

```
output: {
    library: 'main',
    libraryTarget: 'amd'
}
```

Then you may use the generated main.js like this:

```
require('bundle', function (bundle) {
    // use main here.
});
```
