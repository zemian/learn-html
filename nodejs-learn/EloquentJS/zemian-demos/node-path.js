/*
When node search "relative" module path, it always starts where the the script is located.
*/

// https://nodejs.org/api/modules.html#modules_require_resolve_request_options
console.log("require.resolve.paths: fs=" + require.resolve.paths('fs')); // => null means core module
console.log("require.resolve.paths: foo=" + require.resolve.paths('foo'));
console.log("require.resolve.paths: ./foo=" + require.resolve.paths('./foo'));
console.log("require.resolve.paths: ../foo=" + require.resolve.paths('../foo'));
console.log("require.resolve.paths: ../../foo=" + require.resolve.paths('../../foo'));
console.log("require.resolve.paths: /foo=" + require.resolve.paths('/foo'));