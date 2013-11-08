define([
  'core',
  'module1',
  'module2'
], function(mylib) {

  // Expose mylib identifier globally
  return (window.mylib = mylib);

});