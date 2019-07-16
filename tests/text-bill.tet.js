describe('Text Bill', function () {
    it('This test will add an amount of 2.75 everytime a call is added and return the total amount', function () {
        var textBill = TextManager();
        textBill.add("call");
        textBill.add("call");
        textBill.add("call");
        textBill.add("call");
        assert.equal(textBill.total(), 11)    
    })
    it('This test will add an amount of 0.75 everytime a sms is added and return the total amount', function () {
        var textBill = TextManager();
        textBill.add("sms");
        textBill.add("sms");
        textBill.add("sms");
        textBill.add("sms");
        textBill.add("sms");
        assert.equal(textBill.total(), 3.75)    
    })
    it('This test will add an calls & sms and return the total amount', function () {
        var textBill = TextManager();
        textBill.add("sms");
        textBill.add("call");
        textBill.add("call");
        textBill.add("sms");
        textBill.add("call");
        textBill.add("sms");
        assert.equal(textBill.total(), 10.50)    
    })
})