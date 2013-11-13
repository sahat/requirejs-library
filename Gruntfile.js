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
            almond: '../bower_components/almond/almond'
          },
          // This lines tells r.js to include "almond" and "mylib" into the final file
          // specified in out property above
          include: ['almond', 'mylib'],
          // Adds compatibility for AMD, CommonJS and Browser globals
          wrap: {
            startFile: 'src/_start.js',
            endFile: 'src/_end.js'
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

    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['requirejs'],
        options: {
          spawn: false
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['requirejs']);
};