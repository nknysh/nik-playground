var assert = require("assert");
var should = require("chai").should();

var requestHandlers = require("../requestHandlers.js");


describe('postData', function(){
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