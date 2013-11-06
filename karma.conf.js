module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'test/spec/**/*.js', included: false },
      { pattern: 'bower_components/lodash/dist/lodash.min.js', included: false },

      'test/test-main.js'
    ],
    exclude: [],
    reporters: ['progress', 'growl'],
    port: 9878,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: false
  });
};
