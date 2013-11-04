module.exports = function(grunt) {

  grunt.initConfig({

    requirejs: {
      options: {
        mainConfigFile: "app/main.js",
        include: ["main"],
        insertRequire: ["main"],
        out: "dist/source.min.js",
        optimize: 'none',
        name: "almond",
        baseUrl: "dist/app",
        wrap: true,
        preserveLicenseComments: false
      }
    },

    min: {
      "dist/skeleton.min.js": "dist/skeleton.js"
    }
  });

  // Grunt tasks.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // When running the default Grunt command, just lint the code.
  grunt.registerTask('default', ['requirejs', 'min']);
};
