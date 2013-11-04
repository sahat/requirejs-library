// load the entire module/library and pass to the test
define(['skeleton'],function(skeleton) {

  // use jasmine to run tests against the required code
  describe('module', function() {

    it('should have a method', function() {
      expect(skeleton.module.method).toNotBe(undefined);
    });

    it('the method should work', function() {
      expect(skeleton.module.method()).toBe('it does');
    });

  });

});
