define(['common', 'dasherize'], function(common, dasherize) {

  function slugify(str) {
    if (str == null) return '';

    var from = 'ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź',
        to = 'aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz',
        regex = new RegExp(common.defaultToWhiteSpace(from), 'g');

    str = String(str).toLowerCase().replace(regex, function(c){
      var index = from.indexOf(c);
      return to.charAt(index) || '-';
    });

    return dasherize(str.replace(/[^\w\s-]/g, ''));
  }

  return slugify;

});
