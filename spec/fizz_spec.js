var chai = require("chai");
var fizz = require ("../fizzer")
var expect = chai.expect;
var assert = chai.assert;


describe('fizz buzz', function(){
  it('1 should return number 1', function(done){
	assert.equal(fizz.fizzer(1), 1, 'number 1 should equal number 1');
    done();
  })
  
  it('2 should return number 2', function(done){
	assert.equal(fizz.fizzer(2), 2, 'number 2 should equal number 2');
    done();
  })  
})