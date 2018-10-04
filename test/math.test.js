const assert = require('assert');
const math = require("../math/math");

describe('Math module', function() {
  describe('@sum', function() {
    it('should return 3 when params are 1 and 2', function() {
      assert.equal(math.sum(1,2), 3);
    });
    it('should return -1 when params are 1 and -2', function() {
      assert.equal(math.sum(1,-2), -1);
    });
  });
  describe('@diff', function() {
    it('should return -1 when params are 1 and 2', function() {
      assert.equal(math.diff(1,2), -1);
    });
    it('should return 4 when params are 2 and -2', function() {
      assert.equal(math.diff(2,-2), 4);
    });
  });
  describe('@product', function() {
    it('should return 5 when params are 2 and 2.5', function() {
      assert.equal(math.prod(2,2.5), 5);
    });
    it('should return 0 when params are 100 and 0', function() {
      assert.equal(math.prod(100, 0), 0);
    });
  });
  describe('@div', function() {
    it('should return 2 when params are 6 and 3', function() {
      assert.equal(math.div(6,3), 2);
    });
    it('should return Infinity when params are 1 and 0', function() {
      assert.equal(math.div(1, 0), Infinity);
    });
  });
});