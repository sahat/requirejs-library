define(['person'],function(Person){

  describe('Person', function(){

    it('should have a name by default', function() {
      new Person().name.should.equal('Joe');
    });

    it('should allow a name to be set on creation', function() {
      new Person('Francis').name.should.equal('Francis');
    });

    it('should have an age');

  });

});
