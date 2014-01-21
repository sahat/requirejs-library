define(['slugify'], function(slugify) {

  describe('Slugify', function() {
    it('should slugify an english sentence', function() {
      expect(slugify('Jack & Jill like numbers')).toEqual('jack-jill-like-numbers');
    });

    it('should work with non-english letters', function() {
      expect(slugify('I know latin characters: á í ó ú ç ã õ ñ ü ă ș ț')).toEqual('i-know-latin-characters-a-i-o-u-c-a-o-n-u-a-s-t');
    });

    it('should work with null, undefined and empty strings', function() {
      expect(slugify(null)).toEqual('');
      expect(slugify(undefined)).toEqual('');
      expect(slugify('')).toEqual('');
    });
  });

});
