const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

// Configure chai
chai.use(chaiHttp);
chai.should();


describe('Suite 1', function () {

    this.timeout(40 * 1000);

    before(function() {
        console.info('before');
    });
    beforeEach(function() {
        console.info('beforeEach');
    });
    afterEach(function() {
        console.info('afterEach');
    });
    after(function() {
        console.info('after');
    });


    it('should pass', function (done) {
        chai.request(app)
            .get('/')
            .end(function (err,res) {
                assert.equal(res.status, 200);
                done();
            });

    });

    it('should pass 2', function (done) {
        chai.request(app)
            .get('/')
            .end(function (err,res) {
                assert.equal(res.status, 200);
                done();
            });

    });

    // it('should fail 1', function (done) {
    //     chai.request(app)
    //         .get('/')
    //         .end(function (err,res) {
    //             assert.equal(res.status, 500);
    //             done();
    //         });
    //
    // });

});