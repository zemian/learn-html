## Getting Started

https://gruntjs.com/getting-started

  npm install -g grunt-cli

  cd hello

  # If there is a Gruntfile.js in place, then simple run
  # the following to get a list of all available tasks
  grunt --help

## Available Plugins

https://www.npmjs.com/search?q=keywords:gruntplugin

## How to install plugins

    # Step 1
    # npm install <module> --save-dev
    npm install grunt-contrib-clean --save-dev

    # Step 2, add following into Gruntfile.js
    grunt.loadNpmTasks('grunt-contrib-clean');

    # Step 3, add following into grunt.initConfig()
    grunt.initConfig({
        clean: {
            build: ['build']
        }
    });

    # Run it
    grunt clean

## How to configure grunt plugin task

See ttps://gruntjs.com/configuring-tasks

Task configuration is specified in your Gruntfile via the grunt.initConfig method.

    grunt.initConfig({
      concat: {
        // concat task configuration goes here.
      },
      uglify: {
        // uglify task configuration goes here.
      },
      // Arbitrary non-task-specific properties.
      my_property: 'whatever',
      my_src_files: ['foo/*.js', 'bar/*.js'],
    });

A task may contains sub-tasks (or multi-tasks) called targets. You invoke them by task:target format,
and you configure them like this:

    grunt.initConfig({
      concat: {
        foo: {
          // concat task "foo" target options and files go here.
        },
        bar: {
          // concat task "bar" target options and files go here.
        },
      },
      uglify: {
        bar: {
          // uglify task "bar" target options and files go here.
        },
      },
    });
    # Invoke with "grunt concat:foo"

## Grunt files, src, dest configuration

https://gruntjs.com/configuring-tasks#files

## Writing Tasks

See
- https://gruntjs.com/creating-tasks#custom-tasks
- https://gruntjs.com/api/grunt

You can run grunt with different grunt file. For example:

  cd writing-tasks
  npm install
  grunt --gruntfile HelloGruntfile.js

## Creating Plugins

See https://gruntjs.com/creating-plugins

- Install grunt-init with npm install -g grunt-init
- Install the gruntplugin template with git clone git://github.com/gruntjs/grunt-init-gruntplugin.git ~/.grunt-init/gruntplugin (%USERPROFILE%\.grunt-init\gruntplugin on Windows).
- Run grunt-init gruntplugin in an empty directory.
- Run npm install to prepare the development environment.
- Author your plugin.
- Run npm publish to publish the Grunt plugin to npm!
