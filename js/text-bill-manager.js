function TextManager() {

    var textTotal = 0;
    var TCallTotal = 0;
    var TSmsTotal = 0;

    function TextAdd(text) {
        var billText = text;

        if (billText === "call") {
            TCallTotal = TCallTotal + 2.75;
        }
        else if (billText === "sms") {
            TSmsTotal = TSmsTotal + 0.75;
        }

    }
    function callTotal() {
        return TCallTotal.toFixed(2);
    }
    function smsTotal() {
        return TSmsTotal.toFixed(2);
    }
    function showTotal() {
        textTotal = TCallTotal + TSmsTotal;
        return textTotal.toFixed(2);
    }
    function TextWarning() {
        if ((showTotal() >= 30) && (showTotal() < 50)) {
            return "warning"
        }
        if (showTotal() >= 50) {
            return "danger"
        }
    }
    return {
        add: TextAdd,
        call: callTotal,
        sms: smsTotal,
        total: showTotal,
        warning: TextWarning,
    }
}