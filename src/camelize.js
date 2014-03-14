define(['trim'], function(trim) {

  function camelize(str) {
    return trim(str).replace(/[-_\s]+(.)?/g, function(match, c) { return c ? c.toUpperCase() : ''; });
  }

  return camelize;

});
