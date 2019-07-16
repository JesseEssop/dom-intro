
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
//var callTotalTwoElement = document.querySelector(".callTotalTwo");
//var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
//var totalTwoElement = document.querySelector(".totalTwo");

var radioInstance = RadioManager();
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var radioLevel;

var radioTemp = document.querySelector(".userTemplate").innerHTML;
var radioUserTemp = Handlebars.compile(radioTemp);
var radioDataElem = document.querySelector(".radioData");
radioBill();


function radioBill () {
    
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    radioInstance.add(billItemType);

    radioLevel = '';
    radioLevel = radioInstance.warning();
    

    var radioDataHTML = radioUserTemp({
        call : "R" + radioInstance.call(),
        sms : "R" + radioInstance.sms(),
        total : "R" + radioInstance.total()
    })

    radioDataElem.innerHTML = radioDataHTML;

}
radioBillAddBtn.addEventListener('click', radioBill);

Handlebars.registerHelper("warn",function (){
    if (radioLevel === "warning") {
        return true;
    }

})
Handlebars.registerHelper("danger", function (){
    if (radioLevel === "danger") {
        return true
    }
})