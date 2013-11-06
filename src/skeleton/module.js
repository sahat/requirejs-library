// define(function() {
//   return {
//     method: function() { return 'it does'; }
//   };
// });


define(['./core', 'lodash'], function(mylib, _) {
  
  _.extend(mylib, { method: 'it does!' });

  return mylib;

});

