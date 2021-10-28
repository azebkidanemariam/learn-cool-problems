import assert from 'assert'
import sum1toN from './sum1toN.js'

describe('number', function() {
    describe('#sum1toN', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal(sum1toN(3), 6);
      });
    });
  });