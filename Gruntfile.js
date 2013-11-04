module.exports = function(grunt) {

  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          baseUrl: "src",
          name: '../vendor/almond',
          include: ['skeleton'],
          out: "dist/skeleton.js",
          wrap: {
            startFile: 'src/wrapStart.js',
            endFile: 'src/wrapEnd.js'
          },
          // build file destination, relative to the build file itself

          optimize: 'none',
          preserveLicenseComments: false
        }
      }
    },

    uglify: {
      release: {
        files: {
          "dist/skeleton.min.js": "dist/skeleton.js"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['requirejs', 'uglify']);
};
