"use strict";

module.exports = function(karma) {
  karma.set({

    frameworks: [ "jasmine", "browserify", "chai" ],

    files: [
      "./test/**/*.js"
    ],

    reporters: [ "dots" ],

    preprocessors: {
      "./test/**/*.js": "browserify"
    },

    browserify: {
      debug: true,
      paths: ["./src", "./test/spec"],
      transform: [
        ["babelify", {
            presets: ["es2015"],
            sourceRoot: "../../src"
        }]
      ]
    },

    browsers: [ "PhantomJS" ],

    singleRun: false,
    autoWatch: true
  });
};
