var expect = require('chai').expect;
var convertRomanNumeral = require('./romanNumerals').convertRomanNumeral;

// Create a test suite for isPrime

describe("convertRomanNumeral()", function() {

    it("convert roman numeral C to 100", function(){
        expect(convertRomanNumeral("C")).to.equal(100);
    });

    it("convert roman numeral L to 50", function(){
        expect(convertRomanNumeral("L")).to.equal(50);
    });

    it("convert roman numeral XC to 90", function(){
        expect(convertRomanNumeral("XC")).to.equal(90);
    });

    it("convert roman numeral CXXV to 125", function(){
        expect(convertRomanNumeral("CXXV")).to.equal(125);
    });

    it("convert roman number CVIII to 108", function(){
        expect(convertRomanNumeral("CVIII")).to.equal(108);
    });

    it("return NaN for non-valid string", function(){
        expect(convertRomanNumeral("Hi")).to.eql(NaN);
        //the eql vs equal on the non-numbers is crazy!
    });
})
