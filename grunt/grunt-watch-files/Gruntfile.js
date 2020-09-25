/*
What is grunt-contrib-watch?

    Run predefined tasks whenever watched file patterns are added, changed or deleted

See
- https://github.com/gruntjs/grunt-contrib-watch
- https://gruntjs.com/configuring-tasks#files
 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['hello'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.registerTask('hello', 'A hello task.', function() {
        grunt.log.writeln('Hello World.');
    });

    grunt.registerTask('default', 'A watch demo', ['watch']);
};
