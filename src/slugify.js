

define(function() {

  function slugify(str) {
    if (str == null) return '';

    var from  = "ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",
      to    = "aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",
      regex = new RegExp(defaultToWhiteSpace(from), 'g');

    str = String(str).toLowerCase().replace(regex, function(c){
      var index = from.indexOf(c);
      return to.charAt(index) || '-';
    });

    return _s.dasherize(str.replace(/[^\w\s-]/g, ''));
  },

  return random;

});



