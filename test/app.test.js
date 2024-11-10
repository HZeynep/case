// test/app.test.js
const assert = require('assert');
const add = require('../nodejs-ci-cd-example/app');  // app.js'deki add fonksiyonunu içeri aktar

describe('Add Function', function() {
    it('should return 5 when 2 and 3 are added', function() {
        const result = add(2, 3);
        assert.strictEqual(result, 5);  // Beklenen sonuç: 5
    });

    it('should return 0 when -1 and 1 are added', function() {
        const result = add(-1, 1);
        assert.strictEqual(result, 0);  // Beklenen sonuç: 0
    });

    it('should return -5 when -2 and -3 are added', function() {
        const result = add(-2, -3);
        assert.strictEqual(result, -5);  // Beklenen sonuç: -5
    });
});

