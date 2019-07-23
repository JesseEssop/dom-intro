function RadioManager() {

    var callRadio = 0;
    var smsRadio = 0;
    var totalRadio = 0;


    function RadioAdd(radio) {
        var billRadio = radio;
        if (billRadio === "call") {
            callRadio = callRadio + 2.75
        }
        else if (billRadio === "sms") {
            smsRadio = smsRadio + 0.75;
        }
    }
    function callRadioTotal() {

        return callRadio.toFixed(2)
    }

    function smsRadioTotal() {

        return smsRadio.toFixed(2)
    }

    function radioTotal() {
        totalRadio = callRadio + smsRadio
        return totalRadio.toFixed(2);
    }

    function RadioWarning() {
        if ((radioTotal() >= 30) && (radioTotal() < 50)) {
            return "warning"
        }
        if (radioTotal() >= 50) {
            return "danger"
        }
    }
    return {
        add: RadioAdd,
        call: callRadioTotal,
        sms: smsRadioTotal,
        total: radioTotal,
        warning: RadioWarning,
    }
}