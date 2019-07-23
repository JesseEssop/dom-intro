
var billTypeTextElement = document.querySelector(".billTypeText");

var addToBillBtn = document.querySelector(".addToBillBtn");
var textInstance = TextManager();

var textTemp = document.querySelector(".userTemplate").innerHTML;
var textUserTemp = Handlebars.compile(textTemp);
var textDataElem = document.querySelector(".textData");

var textLevel;


textBill()
function textBill() {
    textLevel = "";
    textInstance.add(billTypeTextElement.value);
    textLevel = textInstance.warning();
    
    Handlebars.registerHelper("warn", function () {
        if (textLevel === "warning") {
            return true
        }
    });
    Handlebars.registerHelper("danger", function () {
        if (textLevel === "danger") {
           return true
        }
    
    });

    var textDataHTML = textUserTemp({
        call: "R" + textInstance.call(),
        sms: "R" + textInstance.sms(),
        total: "R" + textInstance.total()
    })

    textDataElem.innerHTML = textDataHTML
}
addToBillBtn.addEventListener('click', textBill);

Handlebars.registerHelper("warn", function () {
    if (textLevel === "warning") {
        classList.add("warning")
    }
});
Handlebars.registerHelper("danger", function () {
    if (textLevel === "danger") {
        classList.add("danger")
    }

});

