// load the entire module/library and pass to the test
define(['skeleton'],function(skeleton) {

  // use jasmine to run tests against the required code
  describe('skeleton', function() {

    it('should be accessible', function() {
      expect(skeleton).toNotBe(null);
    });

    it('should return a VERSION', function() {
      expect(skeleton.VERSION).toNotBe(null);
    });

  });

});
