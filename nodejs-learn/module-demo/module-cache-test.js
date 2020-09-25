moduleCache = require('./module-cache');
console.log("first", moduleCache.mydata.id);

moduleCache2 = require('./module-cache');
console.log("second", moduleCache2.mydata.id);
