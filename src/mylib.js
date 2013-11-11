define([
  'random',
  'trim',
  'camelize'
], function(random, trim, camelize) {

  var mylib = function(obj) {
    if (obj instanceof mylib) return obj;
    if (!(this instanceof mylib)) return new mylib(obj);
    this._wrapped = obj;
  };
  mylib.random = random;
  mylib.trim = trim;
  mylib.camelize = camelize;
  mylib.VERSION = '1.5.2';

  console.log(random(23,44));

  return mylib;
});