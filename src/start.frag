(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    //Browser globals case. Just assign the
    //result to a property on the global.
    root.mylib = factory();
  }
}(this, function () {