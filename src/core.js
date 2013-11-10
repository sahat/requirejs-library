define([], function() {
  
  var mylib = {
    version: '1.0'
  };

  mylib.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  return mylib;

});

