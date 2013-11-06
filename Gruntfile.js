module.exports = function(grunt) {
  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          // All paths will be relative to this baseUrl
          baseUrl: "src",
          // Tells r.js that you want everything in one file
          out: "dist/mylib.js",
          // Set paths for modules (optional, just less typing)
          paths: {
            almond: '../bower_components/almond/almond',
            lodash: '../bower_components/lodash/dist/lodash.min'
          },
          // Usually, you would use the name parameter to specify your main module 
          // but we’re using include here because we’re bundling almond.js loader as well
          include: ['almond', 'mylib'],
          // Insert require([]) at the end of the built file to trigger module loading
          insertRequire: ['mylib'],
          // Wrap everything into IIFE: (function() { + content + }());
          wrap: true,
          // No minification will be done
          optimize: 'none',
          // Remove license comments from the built file
          preserveLicenseComments: false,

        }
      }
    },

    uglify: {
      release: {
        files: {
          "dist/mylib.min.js": "dist/mylib.js"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['requirejs', 'uglify']);
};