describe('is-empty', function () {

var should = require('should');
var empty = require('..');

it('handles arrays', function () {
  empty([]).should.be.true();
  empty(['a', 'b']).should.be.false();
});

it('handles objects', function () {
  empty({}).should.be.true();
  empty({ a: 'b' }).should.be.false();
  empty({'length': 0}).should.be.false();
});

it('handles strings', function () {
  empty('').should.be.true();
  empty('string').should.be.false();
});

it('handles numbers', function () {
  empty(0).should.be.true();
  empty(42).should.be.false();
});

it('handles functions', function () {
  empty(function(){}).should.be.true();
  empty(function(a,b){}).should.be.false();
});

it('handles nulls', function () {
  empty(null).should.be.true();
  empty(undefined).should.be.true();
});

it('handles booleans', function () {
  empty(false).should.be.false();
  empty(true).should.be.false();
});

it('handles maps', function () {
  empty(new Map()).should.be.true();
  empty(new Map([['key', 'value']])).should.be.false();
});

it('handles sets', function () {
  empty(new Set()).should.be.true();
  empty(new Set([1,2,3,4])).should.be.false();
});

});
