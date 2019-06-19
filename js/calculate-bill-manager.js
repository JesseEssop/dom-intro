function CalculateManager() {
    var totalTing = 0;

    function totalBill(billTings) {
        var billItems = billTings.split(",");

        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                totalTing = totalTing + 2.75;
            }
            else if (billItem === "sms") {
                totalTing = totalTing + 0.75;
            }
        }return totalTing;
    }
    function BeWarned() {
        if ((totalTing >= 20) && (totalTing < 30)) {
            return "warning";
        }
        if (totalTing >= 30) {
            return "danger";
        }
        if (totalTing < 20) {
            return "safe"
        }
    }
    function BillTotal() {
        return totalTing.toFixed(2)
    }
    return {
        add: totalBill,
        level: BeWarned,
        total: BillTotal
    }
}