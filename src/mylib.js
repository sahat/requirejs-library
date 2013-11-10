define([
  'core',
  'module1',
  'module2'
], function(mylib) {

  console.log('Library module has been loaded successfully.');

  console.log(mylib);
  return mylib;
});