Require.js Library Skeleton
===========================

### Getting Started
This project depends on [bower](https://github.com/bower/bower) and [grunt-cli](http://gruntjs.com) and Node. 
They need to be installed globally using npm before you can run the following commands:
```
bower install
npm install
```

And then to build a library simply run:
```
grunt
```

### Source Maps
Require.js optimizer comes with a built-in support to generate source maps. It is already enabled in **Gruntfile**
by default, but feel free to disable source maps. Refer to [this article](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging#source-maps)
to enable source maps in Google Chrome, if you haven't already done so.
![alt text](https://lh6.googleusercontent.com/-_IhjVi3fN2A/UoB47nFh94I/AAAAAAAADgA/z6LHmjyqvbA/s2560/Screenshot+2013-11-11+01.15.12.png)

With *Bower* you get Almond.js, Require.js, Jasmine BDD framework, and Lodash utility library.
And with *Grunt* you get Require.js optimization tool that allows you to output
a single JavaScript file minified or unminified.

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
