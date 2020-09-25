module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        copy: {
            buildweb: {
                files: [
                    {cwd: 'node_modules', src: ['requirejs/require.js'], dest: 'web/js/libs/requirejs', expand: true, flatten: true},
                    {cwd: 'node_modules', src: ['knockout/build/output/knockout-latest.debug.js'], dest: 'web/js/libs/knockout', expand: true, flatten: true},
                    {cwd: 'node_modules', src: ['jquery/dist/jquery.js'], dest: 'web/js/libs/jquery', expand: true, flatten: true}
                ]
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['copy:buildweb']);
};
