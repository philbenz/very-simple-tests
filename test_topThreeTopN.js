var expect = require('chai').expect;
var topThreeOrderBug = require('./topThreeTopN').topThreeOrderBug;

// Create a test suite for isPrime

describe("topThreeOrderBug()", function() {
    it("return highest 3 values from array", function(){
        var arr = [5,3,2,8,1,11]
        expect(topThreeOrderBug(arr)).to.eql([11, 8, 5]);
    });

    it("return highest 3 values from array", function(){
        var arr = [1,2,3,4,5,6]
        expect(topThreeOrderBug(arr)).to.eql([6, 5, 4]);
    });

    it("return highest 3 values from array", function(){
        var arr = [6,5,4,3,2,1]
        expect(topThreeOrderBug(arr)).to.eql([6, 5, 4]);
    });
})
