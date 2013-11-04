// load the entire module/library and pass to the test
define(['skeleton'],function(skeleton) {

  // use jasmine to run tests against the required code
  describe('feature', function() {

    it('should be working', function() {
      expect(skeleton.feature()).toBe('working');
    });

  });

});
