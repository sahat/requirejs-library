(function (window, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser globals (mylib is your global library identifier)
    window.mylib = factory();
  }
}(this, function () {