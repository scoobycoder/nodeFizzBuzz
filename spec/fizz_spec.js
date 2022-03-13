var chai = require("chai");
var fizz = require ("../fizzer")
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

  it('should return fizz for 3', function(done){
	  assert.equal(fizz.fizzer(3), 'fizz', 'return fizz for 3');
    done();
  }) 

  it('should return buzz for 5', function(done){
	  assert.equal(fizz.fizzer(5), 'buzz', 'return buzz for 5');
    done();
  })

  it('should return fizz for 6', function(done){
	  assert.equal(fizz.fizzer(6), 'fizz', 'return fizz for 6');
    done();
  })  

  it('should return buzz for 10', function(done){
	  assert.equal(fizz.fizzer(10), 'buzz', 'return buzz for 10');
    done();
  })

  it('should return fizzbuzz for 15', function(done){
	  assert.equal(fizz.fizzer(15), 'fizzbuzz', 'return fizzbuzz for 15');
    done();
  })

  it('should return fizz for 13', function(done){
	  assert.equal(fizz.fizzer(13), 'fizz', 'return fizz for 13');
    done();
  })

  it('should return buzz for 58', function(done){
	  assert.equal(fizz.fizzer(58), 'buzz', 'return buzz for 58');
    done();
  })

})