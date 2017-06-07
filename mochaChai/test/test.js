var chai = require('chai');
var chaiHttp = require('chai-http');
var jsonURL = 'https://jsonplaceholder.typicode.com/posts/1';

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();

chai.use(chaiHttp);


function foo(){
    return true;
}

describe('A basic test', function(){
    
    // TEST 1
    it('should pass when everything is OK', function(){
        expect(true).to.be.true;
        expect(foo).to.not.equal('bar');
    });


    //TEST 2
    it('should start empty', function() {
        var arr = [];
        arr.push('a');
        assert.equal(arr.length, 0);
    });


    // TEST 3
    it('should GET status 200 and charset = utf-8', function(done) {
        chai.request(jsonURL)
        .get('/')
        .end(function(err, res){
            // console.log(res);
            // console.log(res.header.date);
            res.should.have.status(200);
            expect(res.charset).to.equal('utf-8');
            done();
        });
    });
});