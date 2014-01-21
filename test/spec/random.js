define(['random'], function(random) {

  describe('Random Utility', function() {
    var min = Math.pow(2, 31);
    var max = Math.pow(2, 62);

    // Our own custom Jasmine Matcher
    beforeEach(function() {
      this.addMatchers({
        toBeGreaterThanOrEqualTo: function(expected) {
          return this.actual >= expected;
        }
      });
    });

    it('should produce a random number greater than or equal to the minimum number', function() {
      expect(random(min, max)).toBeGreaterThanOrEqualTo(min);
    });

    it('should produce a random number when passed Number.MAX_VALUE', function() {
      expect(random(Number.MAX_VALUE)).toBeGreaterThan(0);
    });
  });

});
