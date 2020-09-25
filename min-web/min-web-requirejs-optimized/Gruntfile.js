module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
                    baseUrl: './',
                    mainConfigFile: 'main.js',
                    include: [ 'main.js' ],
                    out: 'main-optimized.js'
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);
};
