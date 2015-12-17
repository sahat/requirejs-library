module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    browserify: {
     dist: {
      options: {
       paths: ["./src", "./test/spec"],
       transform: [
        ["babelify", { presets: "es2015" }]
       ],
       browserifyOptions: {
         standalone: "<%= pkg.name %>"
       }
      },
      files: {
         "dist/<%= pkg.name %>.js": ["./src/<%= pkg.name %>.js"]
      }
     }
    },

    watch: {
     scripts: {
      files: ["src/**/*.js"],
      tasks: ["browserify"]
     }
    }
  });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);

};
