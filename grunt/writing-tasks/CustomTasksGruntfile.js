// https://gruntjs.com/creating-tasks#custom-tasks

module.exports = function(grunt) {
    // == Inside a task, you can run other tasks.
    grunt.registerTask('runfoo', 'My "runfoo" task.', function() {
        // Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
        grunt.task.run('bar', 'baz');
        // Or:
        grunt.task.run(['bar', 'baz']);
    });

    // == Tasks can be asynchronous.
    grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
      // Force task into async mode and grab a handle to the "done" function.
      var done = this.async();
      // Run some sync stuff.
      grunt.log.writeln('Processing task...');
      // And some async stuff.
      setTimeout(function() {
        grunt.log.writeln('All done!');
        done();
      }, 1000);
    });

    // == Tasks can access their own name and arguments.

    // Usage:
    // grunt foo
    //   logs: "foo", undefined, undefined
    // grunt foo:bar
    //   logs: "foo", "bar", undefined
    // grunt foo:bar:baz
    //   logs: "foo", "bar", "baz"
    grunt.registerTask('foo', 'My "foo" task.', function(a, b) {
      grunt.log.writeln(this.name, a, b);
    });

    // == Tasks can fail if any errors were logged.

    // Usage:
    // grunt failure:true:true
    grunt.registerTask('failure', 'My "failure" task.', function(failureOfSomeKind, ifErrors) {
      if (failureOfSomeKind) {
        grunt.log.error('This is an error message.');
      }

      // Fail by returning false if this task had errors
      if (ifErrors) { return false; }

      grunt.log.writeln('This is the success message');
    });

    // == When tasks fail, all subsequent tasks will be aborted unless --force was specified.
    //
    // Usage:
    // grunt errorfoo foo
    // grunt errorfoo foo --force
    // grunt errorbar foo
    // grunt errorbar foo --force
    grunt.registerTask('errorfoo', 'My "errorfoo" task.', function() {
      // Fail synchronously.
      return false;
    });

    // NOTE: Even this is a async task, when running together with other task, this
    // will be run fully before other tasks begin!
    grunt.registerTask('errorbar', 'My "errorbar" task.', function() {
      var done = this.async();
      setTimeout(function() {
        // Fail asynchronously
        // Note that passing false to the done() function tells Grunt that the task has failed.
        done(false);
      }, 3000);
    });

    // == Tasks can be dependent on the successful execution of other tasks. Note that grunt.task.requires won't actually RUN the other task(s). It'll just check to see that it has run and not failed.
    //

    // Usage:
    // grunt depfoo depbar
    //   doesn't log, because depfoo failed.
    //   ***Note: This is an example of space-separated sequential commands,
    //   (similar to executing two lines of code: `grunt foo` then `grunt bar`)
    // grunt depbar
    //   doesn't log, because depfoo never ran.
    grunt.registerTask('depfoo', 'My "depfoo" task.', function() {
      return false;
    });

    grunt.registerTask('depbar', 'My "depbar" task.', function() {
      // Fail task if "foo" task failed or never ran.
      grunt.task.requires('depfoo');
      // This code executes if the "foo" task ran successfully.
      grunt.log.writeln('Hello, world.');
    });

    // == Tasks can access configuration properties.

    grunt.initConfig({
        configfoo: {
            hello: 'hello world'
        },
        meta: {
            // Rename this to "name" for testing
            name2: 'hello world'
        }
    });
    grunt.registerTask('configfoo', 'My "configfoo" task.', function() {
      // Log the property value. Returns null if the property is undefined.
      grunt.log.writeln('The configfoo.hello property is: ' + grunt.config('configfoo.hello'));
      // Also logs the property value. Returns null if the property is undefined.
      grunt.log.writeln('The configfoo.hello property is: ' + grunt.config(['configfoo', 'hello']));
    });

    // == Tasks can fail if required configuration properties don't exist.
    // To test this, update grunt.initConfig() above.
    // Note you can't set initConfig() twice! Or last will override everything!

    grunt.registerTask('reqpropfoo', 'My "reqpropfoo" task.', function() {
      // Fail task if "meta.name" config prop is missing
      // Format 1: String
      grunt.config.requires('meta.name');
      // or Format 2: Array
      grunt.config.requires(['meta', 'name']);
      // Log... conditionally.
      grunt.log.writeln('This will only log if meta.name is defined in the config.');
    });

};
