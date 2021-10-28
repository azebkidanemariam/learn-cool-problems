import assert from 'assert'
import {odd} from './odd.js'

const xs = [1, 2, 3, 4, 5]

describe('Array', function () {
 describe("#odd", function ()  {
   it("[1, 2, 3, 4, 5]", function () { 
    assert.deepEqual(odd(xs)([1, 2, 3, 4, 5]), [1, 3, 5])
   })
 })
})

