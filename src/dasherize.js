define(['trim'], function(trim) {

  function dasherize(str) {
    return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
  }

  return dasherize;

});
