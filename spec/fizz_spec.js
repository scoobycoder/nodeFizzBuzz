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

  it('should return zero when nothing passed to it', function(done){
	assert.equal(fizz.fizzer(), 0, 'return zero when nothing passed to it');
    done();
  }) 

  it('should return fizz for 3', function(done){
	assert.equal(fizz.fizzer(3), 'fizz', 'return fizz for 3');
    done();
  }) 

  it('should return buzz for 5', function(done){
	assert.equal(fizz.fizzer(5), 'buzz', 'return buzz for 5');
    done();
  })

})