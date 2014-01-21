define(['common'], function(common) {

  function trim(str, characters) {
    if (str == null) return '';
    if (!characters && String.prototype.trim) return String.prototype.trim.call(str);
    characters = common.defaultToWhiteSpace(characters);
    return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$', 'g'), '');
  }

  return trim;

});
