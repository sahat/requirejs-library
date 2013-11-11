define(function() {

  function isBlank(str){
    if (str == null) str = '';
    return (/^\s*$/).test(str);
  }

  return isBlank;

});