/*global describe*/
var chai = require('chai'),
    should = chai.should(),
    parseJS = require('../');

describe('GTParseJSForFunctionCalls', function() {

    describe('findInString', function() {

        it('Should find one function call', function() {
            var result = parseJS.findInString('asdbjhasbdjas call()', 'call');
            result.should.be.a('array');
            result.should.have.length(1);
            result[0].should.equal('call()');
        });

        it('Should find multiple function calls', function() {
            var result = parseJS.findInString('asdbjhasbdjas call() call()', 'call');
            result.should.be.a('array');
            result.should.have.length(2);
            result[0].should.equal('call()');
        });

        it('Should dismiss similar function calls', function() {
            var result = parseJS.findInString('asdbjhasbdjas call() mycall()', 'call');
            result.should.be.a('array');
            result.should.have.length(1);
            result[0].should.equal('call()');
        });

        it('Should include space between function name and parenthesis', function() {
            var result = parseJS.findInString('asdbjhasbdjas call ()', 'call');
            result.should.be.a('array');
            result.should.have.length(1);
            result[0].should.equal('call ()');
        });

        it('Should work on multiline strings', function() {
            var str = 'dasbhdbasjdsa call()' +
                'njdsabdbsadhgas call()';
            var result = parseJS.findInString(str, 'call');
            result.should.be.a('array');
            result.should.have.length(2);
            result[0].should.equal('call()');
        });

        it('Should return empty array if no calls', function() {
            var result = parseJS.findInString('asdbjhasbdjas', 'call');
            result.should.be.a('array');
            result.should.have.length(0);
        });

    });

});
