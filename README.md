Require.js Library Skeleton
===========================

### Getting Started
The project depends on [Bower](https://github.com/bower/bower) and [Grunt.js](http://gruntjs.com). Assuming
you already have **Node.js** installed on your system, run the following command:

```
sudo npm install -g grunt-cli bower
```

Next, you need to install project dependencies. 
```
bower install
npm install
```

With [Bower](https://github.com/bower/bower) you get the following libraries:
- **Almond** - A replacement AMD loader for RequireJS, providing the minimal AMD API footprint.
- **Require.js**
- **Jasmine**
- **Mocha** 
- **Chai**

And with **Grunt** you get the following packages:
- **Require.js (r.js)** - Optimization tool that allows you to output a single, minified JavaScript file. 
- **Karma** - Test runner that lets you run your tests in the terminal with `npm test`.
- **JSHint** - JavaScript code quality tool.

### Usage

You can run demos *out of the box*, but if you have changed any of the **src** files, simply run the
following command to re-build the library:
```
grunt
```
**Note**: In the future, when I add `grunt watch`, I will also add an optional alias `grunt build` that is
essentially identical to `grunt`, but more explicit.

### Source Maps

Require.js optimizer comes with a built-in support to generate source maps. It is already enabled in **Gruntfile**
by default, but feel free to disable source maps. Refer to [this article](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging#source-maps)
to enable source maps in Google Chrome, if you haven't already done so.
![alt text](https://lh6.googleusercontent.com/-_IhjVi3fN2A/UoB47nFh94I/AAAAAAAADgA/z6LHmjyqvbA/s2560/Screenshot+2013-11-11+01.15.12.png)



### Structure

- **demo** - html examples with inline and amd script loading
- **dist** - final JS files, both minified and unminified, ready for use
- **src** - *mylib.js* is the entry-file that pulls all other modules
- **test/spec** -
- **test**/SpecRunner.html - standalone jasmine html spec runner
- karma.conf.js — karma test runner configuration
- **test**/test-main.js — configures karma to use Require.js for the tests

### Contributing
If you have any suggestions, or found a bug please open a GitHub issue and I will
get to it as soon as I can.
