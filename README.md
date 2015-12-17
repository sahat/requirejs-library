# JavaScript Library Skeleton


<img src="https://jordankasper.com/images/grunt-logo.png" height="138">
<img src="http://www.braveterry.com/wp-content/uploads/2014/11/wizard.png" height="138">
<img src="https://raw.githubusercontent.com/babel/logo/master/babel.png" height="138">

### Getting Started
The project depends on [Grunt.js](http://gruntjs.com). Assuming
you already have **Node.js** installed on your system, run the following command:

```
sudo npm install -g grunt
```

Next, clone the repository and install project dependencies:
```bash
# Fetch only the latest commits.
git clone git@github.com:bierik/javascript-library.git YOUR_LIBRARY_NAME

cd YOUR_LIBRARY_NAME

npm install
```

And with **npm** you get the following packages:
- [**Grunt**](http://gruntjs.com/) - JavaScript task runner.
- [**Babel**](https://babeljs.io/) - ES6 Transpiler.
- [**Browserify**](http://browserify.org/) - Dependency Bundler
- [**Karma**](http://karma-runner.github.io/) - JavaScript test runner.
- [**Jasmine**](http://jasmine.github.io/) - JavaScript test suite.
- [**Chai**](http://chaijs.com/) - JavaScript Assertion Library.

### Usage

Run the following command to re-build the library:
```
grunt build
```

Run the following command to watch for changes:
```
grunt
```

### Build options

See https://github.com/substack/browserify-handbook for more information about browserify.

### Source Maps

Browserify comes with a built-in support to generate source maps. It is already enabled by default, but feel free to disable source maps. Refer to [this article](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging#source-maps)
to enable source maps in Google Chrome, if you haven't already done so.

### Tests
Simply run:
```
npm test
```

### Additional Notes

When you are changing library's name from **myapp** to **YOUR_LIBRARY_NAME**
- Change the name in `package.json`
- Change the filename in `src/my.app.js`

### Contributing
If you have any suggestions, or found a bug please open a GitHub issue and I will
get to it as soon as I can.
