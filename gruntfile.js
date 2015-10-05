module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          // All paths will be relative to this baseUrl.
          baseUrl: 'src',
          // Tells r.js that you want everything in one file.
          out: 'dist/mylib.js',
          // Set paths for modules (shortcut alias for 'include').
          paths: {
            almond: '../bower_components/almond/almond'
          },
          // Include 'almond' and 'mylib' into the final file
          // specified in 'out' property.
          include: ['almond', 'mylib'],
          // Wrapper for AMD, CommonJS and Browser compatibility.
          wrap: {
            startFile: 'src/_start.js',
            endFile: 'src/_end.js'
          },
          // Minify the file.
          optimize: 'uglify2',
          // Strip comments.
          preserveLicenseComments: false,
          // Add source maps for the original modules.
          generateSourceMaps: true
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['requirejs']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['requirejs', 'watch']);

};
