define(['core'], function(mylib) {

  mylib.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  return mylib;

});