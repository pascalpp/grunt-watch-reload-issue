var path = require('path');

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          keepalive: true,
          livereload: false,
          port: 9090,
          hostname: '*',
        }
      }
    },

    watch: {
      reload: {
        files: [
          '**/*.html',
          '**/*.css',
        ],
        options: {
          spawn: false,
          livereload: {
            port: 9091,
          },
        },
      },
    },

    concurrent: {
      stack: {
        tasks: [
          'connect',
          'watch:reload'
        ],
        options: {
          logConcurrentOutput: true,
          limit: 20
        }
      },
    }
  });

  // define the default task
  grunt.registerTask('default', ['concurrent:stack']);


};
