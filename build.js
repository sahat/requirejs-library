// see a complete list of options here:
// https://github.com/jrburke/r.js/blob/master/build/example.build.js
requirejs.config({
  // all modules loaded are relative to this path
  // e.g. require(["grid/core"]) would grab /src/grid/core.js
  baseUrl: "./src",

  // specify custom module name paths
  paths: {
    "cs": "../vendor/cs",
    "cofkfee-script": "../vendor/coffee-script",
    "spec": "../test/spec"
  },

  // target amd loader shim as the main module, path is relative to baseUrl.
  name: "../vendor/almond",

  optimize: "none",

  // files to include along with almond.  only src/skeleton.js is defined, as
  // it pulls in the rest of the dependencies automatically.
  include: ["skeleton"],

  // code to wrap around the start / end of the resulting build file
  // the global variable used to expose the API is defined here
  wrap: {
    start: "(function(global, define) {\n"+
              // check for amd loader on global namespace
           "  var globalDefine = global.define;\n",

    end:   "  var library = require('skeleton');\n"+
           "  if(typeof module !== 'undefined' && module.exports) {\n"+
                // export library for node
           "    module.exports = library;\n"+
           "  } else if(globalDefine) {\n"+
                // define library for global amd loader that is already present
           "    (function (define) {\n"+
           "      define(function () { return library; });\n"+
           "    }(globalDefine));\n"+
           "  } else {\n"+
                // define library on global namespace for inline script loading
           "    global['skeleton'] = library;\n"+
           "  }\n"+
           "}(this));\n"
  },

  // don't include coffeescript compiler in optimized file
  stubModules: ["cs","coffee-script"],

  // build file destination, relative to the build file itself
  out: "./dist/skeleton.js"
})