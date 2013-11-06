define(['./core', 'lodash'], function(mylib, _) {
  
  _.extend(mylib, { 
    method: function() { 
      return 'Custom method';
    } 
  });

  return mylib;

});

