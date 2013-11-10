/*!
 * mylib @VERSION
 * http://example.com/
 *
 * Copyright 2013 <Author>
 * MIT license
 *
 * Date: @DATE
 */

(function(window, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    factory(window);
  }
}(this, function(window) {

