
var billTypeTextElement = document.querySelector(".billTypeText");
// var callTotalElement = document.querySelector(".callTotalOne");
// var smsTotalElement = document.querySelector(".smsTotalOne");
// var totalOneElement = document.querySelector(".totalOne");


var addToBillBtn = document.querySelector(".addToBillBtn");
var textInstance = TextManager();


var textTemp = document.querySelector(".userTemplate").innerHTML;
var textUserTemp = Handlebars.compile(textTemp);
var textDataElem = document.querySelector(".textData");
textBill()
 function textBill() {
    
    textInstance.add(billTypeTextElement.value);
    textLevel = '';
    textLevel = textInstance.warning();
    
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
        return true;
    }
})
Handlebars.registerHelper("danger", function () {
    if (textLevel === "danger") {
        return true;
    }

})