module.exports = new class {
	printPaths() {
		console.log("== printPaths");
		console.log("require.resolve.paths: fs=" + require.resolve.paths('fs')); // => null means core module
		console.log("require.resolve.paths: foo=" + require.resolve.paths('foo'));
		console.log("require.resolve.paths: ./foo=" + require.resolve.paths('./foo'));
		console.log("require.resolve.paths: ../foo=" + require.resolve.paths('../foo'));
		console.log("require.resolve.paths: ../../foo=" + require.resolve.paths('../../foo'));
		console.log("require.resolve.paths: /foo=" + require.resolve.paths('/foo'));
	}

	printCwd() {
		console.log("== printCwd");
		console.log("__filename " + __filename);
		console.log("__dirname " + __dirname);
	}
}