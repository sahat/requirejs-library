# Require.js Library Skeleton

<img src="https://jordankasper.com/images/grunt-logo.png" height="138">
<img src="http://verekia.com/wp-content/uploads/2011/11/require-js.png">
<img src="http://bower.io/img/bower-logo.png" height="138">

### Getting Started
The project depends on [Bower](https://github.com/bower/bower) and [Grunt.js](http://gruntjs.com). Assuming
you already have **Node.js** installed on your system, run the following command:

```
sudo npm install -g grunt bower
```

Next, clone the repository and install project dependencies:
```bash
# Fetch only the latest commits.
git clone --depth=1 git@github.com:bierik/requirejs-library.git

cd requirejs-library

bower install
npm install
```

With [Bower](https://github.com/bower/bower) you get the following libraries:
- **Almond** - A replacement AMD loader for RequireJS, providing the minimal AMD API footprint.
- **Require.js** - Used as an asynchronous module loader.
- **Jasmine** - Popular BDD testing framework.
- **Chai** - BDD/TDD assertion library (used with Mocha).

And with **npm** you get the following packages:
- **Grunt** - Ultra-fast JavaScript task runner.
- **Require.js** - Used as an optimization tool that lets you to compile a single, minified JavaScript file.
- **Karma** - Awesome JavaScript test runner.


### Usage

This library is flexible enough to work as an inline **\<script\>** declaration,
**Require.js** module, or as a **Node.js** module.

Simply run the following command to re-build the library and start watching for changes:
```
grunt
```

### Source Maps

Require.js optimizer comes with a built-in support to generate source maps. It is already enabled in **gulpfile**
by default, but feel free to disable source maps. Refer to [this article](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging#source-maps)
to enable source maps in Google Chrome, if you haven't already done so.

### Tests
Go to the **test** folder and run *SpecRunnerJasmine.html*.

If you prefer to run your tests with **Karma**, simply run:
```
npm test
```


### Structure

- **demo** - examples with Inline, AMD, CommonJS script loading
- **dist** - minified JavaScript file + source map
- **src**/*mylib.js* - entry-file that pulls all other modules
- **src**/*_start.js* - adds compatibility for AMD, CommonJS and Browser globals
- **src**/*_end.js* - serves the same purpose of the initial require() call that data-main does
- **test/spec** - jasmine and mocha specs
- **test**/SpecRunnerJasmine.html - standalone jasmine html spec runner
- **test**/SpecRunnerMocha.html - standalone mocha html spec runner
- *karma.conf.js* — karma test runner configuration
- **test**/*test-main.js* — configures karma to use Require.js for the tests


### Additional Notes

- When you are changing library's name from **mylib** to **YOUR_LIBRARY_NAME**, update names in the following locations:
 - src/mylib.js: **filename**
 - gulpfile.js: **out**, `out: "dist/YOUR_LIBRARY_NAME.js"`
 - gulpfile.js: **include**, `include: ['almond', 'YOUR_LIBRARY_NAME']`
 - src/_start.js: **else** statement, `window.YOUR_LIBRARY_NAME = factory();`
 - src/_end.js: **return** statement, `require('YOUR_LIBRARY_NAME');`

### Contributing
If you have any suggestions, or found a bug please open a GitHub issue and I will
get to it as soon as I can.
