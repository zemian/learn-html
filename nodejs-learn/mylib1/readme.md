## Npm module with local dev

https://docs.npmjs.com/creating-node-js-modules

## The "mylibX" demos
 
These demos are to test how NPM resolve different version of 
same dependencies is used in a project. 

For example "mylib3-test" dep tree:

    npm list --depth=2
    npm info it worked if it ends with ok
    npm info using npm@6.12.0
    npm info using node@v12.10.0
    mylib2-test@1.0.0 /Users/zedeng/src/vbcs/html-starter/nodejs-learn/mylib3-test
    └─┬ mylib3@1.0.0 -> /Users/zedeng/src/vbcs/html-starter/nodejs-learn/mylib3
      ├─┬ mylib1@1.0.0
      │ └── lodash@4.17.15
      └─┬ mylib2@1.0.0
        └── lodash@3.10.1

NOTE: NPM let you use two different versions of same library within the 
dependencies tree. Within the "mylib3/node_modules", you will see "mylib1" and "mylib2"
each would have their own "node_modules" folders!
