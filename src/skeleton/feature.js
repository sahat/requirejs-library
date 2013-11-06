// define(function() {
//   return function() { return 'working'; };
// });

define(['./core', 'lodash'], function(mylib, _) {
  
  _.extend(mylib, { feature: 'working!' });

  return mylib;

});

