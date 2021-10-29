import assert from 'assert'
import {sum1toN3and5} from './sum1toN3and5'


    describe('#sum1toN3and5', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal(sum1toN3and5(5), 8);
      });
    });