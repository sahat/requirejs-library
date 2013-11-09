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
          // Makes the library AMD-compliant using AMD module wrapper
          wrap: {
            start: ["(function(root, factory) {",
                      "if (typeof define === 'function' && define.amd) {",
                        "define(factory);",
                      "} else {",
                        // Browser globals. Change mylib to the name
                        // that you would like make globally available
                        "root.mylib = factory();",
                      "}",
                    "} (this, function () {"].join('\n'),
                  // Change mylib to the same name as you have in
                  // include and insertRequire above
            end: ["return require('mylib');",
                  "}));"].join('\n')
          },
          // No minification will be done
          optimize: 'uglify2',
          // Remove license comments from the built file
          preserveLicenseComments: false
        }
      },
      dev: {
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
          // Makes the library AMD-compliant using AMD module wrapper
          wrap: {
            start: ["(function(root, factory) {",
                      "if (typeof define === 'function' && define.amd) {",
                        "define(factory);",
                      "} else {",
                        // Browser globals. Change mylib to the name
                        // that you would like make globally available
                        "root.mylib = factory();",
                      "}",
                    "} (this, function () {"].join('\n'),
                  // Change mylib to the same name as you have in
                  // include and insertRequire above
            end: ["return require('mylib');",
                  "}));"].join('\n')
          },
          // No minification will be done
          optimize: 'none',
          // Remove license comments from the built file
          preserveLicenseComments: false,
          generateSourceMaps: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['requirejs:dev']);
  grunt.registerTask('build', ['requirejs:compile']);
};