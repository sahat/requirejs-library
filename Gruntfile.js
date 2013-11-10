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
            lodash: '../bower_components/lodash/dist/lodash'
          },
          // This lines tells r.js to include "almond" and "mylib" into the final file
          // specified in out property above
          include: ['almond', 'mylib'],
          // Insert require() at the end of the built file to trigger module loading
          insertRequire: ['mylib'],
          // Makes the library AMD-compliant using AMD module wrapper
          wrap: {
            start: ["(function(window, factory) {",
                      "if (typeof define === 'function' && define.amd) {",
                        "define(factory);",
                      "} else {",
                        "window.mylib = factory();",
                      "}",
                    "} (this, function () {"].join('\n'),
                  // Change mylib to the same name as you have in
                  // include and insertRequire above
            end: ["return require('mylib');",
                  "}));"].join('\n')
          },
          // No minification will be done
          optimize: 'uglify2',
          // Remove Comments
          preserveLicenseComments: false,
          // Add source maps to the original modules
          generateSourceMaps: true
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['requirejs']);
};