define(function() {

  function capitalize(str) {
    str = str == null ? '' : String(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return capitalize;

});
