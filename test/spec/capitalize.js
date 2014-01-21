define(['capitalize'], function(capitalize) {

  describe('Capitalize', function() {
    it('should have first letter as upper case', function() {
      capitalize('fabio').should.equal('Fabio');
    });

    it('should return an empty string when capitalizing null', function() {
      capitalize(null).should.equal('');
    });

    it('should not change other letters when string is uppercase', function() {
      capitalize('FOO').should.equal('FOO');
    });
  });

});
