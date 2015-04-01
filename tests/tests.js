var assert = require("assert");
var should = require("chai").should();

var requestHandlers = require("../requestHandlers.js");

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('Input', function(){
  describe('#isValid()', function(){
    it('should return isValid = false', function(done){
      requestHandlers.isValid("string more than 10 chars").should.equal(false);
      done();
    })
  })

  describe('#isValid()', function(){
    it('should return isValid = true', function(done){
       requestHandlers.isValid("string").should.equal(true);
      done();
    })
  })

})