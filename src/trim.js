define(function() {



  function trim(str, characters){
    if (str == null) return '';
    if (!characters && String.prototype.trim) return String.prototype.trim.call(str);
    characters = defaultToWhiteSpace(characters);
    return String(str).replace(new RegExp('\^' + characters + '+|' + characters + '+$', 'g'), '');
  }

  return trim;

});