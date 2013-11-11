define([
  'camelize',
  'capitalize',
  'dasherize',
  'random',
  'slugify',
  'trim'
], function(camelize, capitalize, dasherize, random, slugify, trim) {

  var mylib = function(obj) {
    if (obj instanceof mylib) return obj;
    if (!(this instanceof mylib)) return new mylib(obj);
    this._wrapped = obj;
  };

  mylib.VERSION = '1.0.0';

  mylib.camelize = camelize;
  mylib.capitalize = capitalize;
  mylib.dasherize = dasherize;
  mylib.random = random;
  mylib.slugify = slugify;
  mylib.trim = trim;

  return mylib;
});