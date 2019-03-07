
var assert = require('assert')
var empty = require('..')

describe('is-empty', function () {
  it('handles arrays', function () {
    assert(empty([]) == true)
    assert(empty(['a', 'b']) == false)
  })

  it('handles objects', function () {
    assert(empty({}) == true)
    assert(empty({ a: 'b' }) == false)
    assert(empty({ length: 0 }) == false)
  })

  it('handles strings', function () {
    assert(empty('') == true)
    assert(empty(' ') == true)
    assert(empty('string') == false)
    assert(empty('Error') == false)
  })

  it('handles numbers', function () {
    assert(empty(0) == true)
    assert(empty(42) == false)
  })

  it('handles functions', function () {
    assert(empty(function(){}) == true)
    assert(empty(function(a,b){}) == false)
  })

  it('handles nulls', function () {
    assert(empty(null) == true)
    assert(empty(undefined) == true)
    assert(empty() == true)
  })

  it('handles booleans', function () {
    assert(empty(false) == false)
    assert(empty(true) == false)
  })

  it('handles maps', function () {
    assert(empty(new Map()) == true)
    assert(empty(new Map([['key', 'value']])) == false)
  })

  it('handles sets', function () {
    assert(empty(new Set()) == true)
    assert(empty(new Set([1,2,3,4])) == false)
  })

  it('handles errors', function () {
    assert(empty(new Error()) == true)
    assert(empty(new Error('')) == true)
    assert(empty(new Error('test')) == false)
  })
})
