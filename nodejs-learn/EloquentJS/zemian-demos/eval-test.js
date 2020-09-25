// What is the "(1, eval)" used in "EloquentJS/05_higher_order/code/load.js"?
// See https://stackoverflow.com/questions/9107240/1-evalthis-vs-evalthis-in-javascript

/*

A1: (1, eval)('this') is not the same as eval('this') because of the special rules around 
indirect verse direct calls to eval.
To Q2:

To Q2:
(1, eval)('this') is considered as indirect eval call, which in ES5 does execute code 
globally. So the result will be the global the context.

*/