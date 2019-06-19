describe('Calculate Bill', function () {
    it('This test takes in a string of calls and returns the total amount', function () {
        var testBill = CalculateManager();
        assert.equal(testBill.add("call"), 2.75);
    });
    it('This test takes in a string of sms and returns the total amount', function () {
        var testBill = CalculateManager();
        assert.equal(testBill.add("sms"), 0.75);
    });
    it('This test takes in a string of calls and sms, and returns the total amount', function () {
        var testBill = CalculateManager();
        assert.equal(testBill.add("sms, call"), 3.5);
    });
})