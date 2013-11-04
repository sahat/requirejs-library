module.exports = function(grunt) {

  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          baseUrl: "src",
          name: '../vendor/almond',
          optimize: 'none',
          include: ['skeleton'],
          wrap: {
            startFile: 'src/start.frag',
            endFile: 'src/end.frag'
          },
          // build file destination, relative to the build file itself
          out: "dist/skeleton.js",
          preserveLicenseComments: false
        }
      }
    },

    uglify: {
      options: {
        files: {
          "dist/skeleton.min.js": "dist/skeleton.js"
        }
      }
    }

  });

  // Grunt tasks.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // When running the default Grunt command, just lint the code.
  grunt.registerTask('default', ['requirejs', 'uglify']);
};
