const assert = require('assert');
const Math = require('C:/Users/edney/curso_avancado_js_es6/nodejstools-main/Nodejs/Tests/')

describe('Math class', function() {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });
});





class Math{
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 5);
    }
}

module.exports = Math;


//hooks
const assert = require('assert');
const Math = require('C:/Users/edney/curso_avancado_js_es6/nodejstools-main/Nodejs/Tests/')
let value = 0;
    //hooks
    beforeEach(function() {
        value = 0;
    });

it('Math class', function(done) {
    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });
    it('Multiply two numbrs', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    })
});

