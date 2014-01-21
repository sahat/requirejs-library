define([
  'camelize',
  'capitalize',
  'dasherize',
  'random',
  'slugify',
  'trim'
], function(camelize, capitalize, dasherize, random, slugify, trim) {

  // Object Contructor
  var mylib = function(obj) {
    return obj;
  };

  // Properties
  mylib.VERSION = '1.0.0';

  // Methods
  mylib.camelize = camelize;
  mylib.capitalize = capitalize;
  mylib.dasherize = dasherize;
  mylib.random = random;
  mylib.slugify = slugify;
  mylib.trim = trim;

  return mylib;
});
