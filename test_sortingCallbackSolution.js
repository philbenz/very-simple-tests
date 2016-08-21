var expect = require('chai').expect;
var sortByNumber = require('./sortingCallbackSolution').sortByNumber;

// Create a test suite for isPrime

describe("sortByNumber()", function() {
  it("should sort numbers", function(){
      expect(sortByNumber(5, 10)).to.equal(-5);
  });

  it("should sort numbers", function(){
      var a=[3,2,1];
      expect(a.sort(sortByNumber)).to.eql([1,2,3]);
    });


})
