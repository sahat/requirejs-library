module.exports = function(config) {
  config.set({
    // The root path location that will be used to resolve all relative paths
    // defined in files and exclude
    basePath: '',
    // List of files or patterns to load in the browser
    files: [
      { pattern: 'src/**/*.js', included: false },
      { pattern: 'test/spec/**/*.js', included: false },

      'test/test-main.js'
    ],
    // Exclude Mocha specs so that Jasmine does not try run them,
    // And by default it will since file pattern above matches ALL *.js files
    // in test/spec folder
    // In production pick one testing framework and delete specs
    // and spec runner for other frameworks
    exclude: ['test/spec/capitalize.js'],
    // List of frameworks you want to use: jasmine, mocha, qunit
    // This library skeleton already comes with mocha and jasmine specs
    // Just swap jasmine for mocha below, then remove capitalize.js
    // from exclude: [], instead add random.js and slugify.js
    // the exclude array because those are Jasmine specs
    // CURRENTLY KARMA SUPPORTS ONLY ONE TESTING FRAMEWORK AT A TIME
    frameworks: ['jasmine', 'requirejs'],
    // Enable or disable watching files and executing the tests
    // whenever one of these files changes.
    autoWatch: false,
    // Chrome (comes installed with Karma)
    // ChromeCanary (comes installed with Karma)
    // PhantomJS (comes installed with Karma)
    // Firefox (requires karma-firefox-launcher plugin)
    // Opera (requires karma-opera-launcher plugin)
    // Internet Explorer (requires karma-ie-launcher plugin)
    // Safari (requires karma-safari-launcher plugin)
    browsers: ['PhantomJS'],
    // If singleRun is set to true, Karma will start and capture all
    // configured browsers, run tests and then exit with an exit code of 0 or 1.
    singleRun: false
  });
};
