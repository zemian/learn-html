module.exports = function(grunt) {
    grunt.registerTask('default', 'A hello task.', function() {
        grunt.log.writeln('process.env: ', process.env);
        grunt.log.writeln('User home: ', process.env['HOME']);
    });
};
