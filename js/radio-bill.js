
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");

var radioInstance = RadioManager();
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var radioLevel;

var radioTemp = document.querySelector(".userTemplate").innerHTML;
var radioUserTemp = Handlebars.compile(radioTemp);
var radioDataElem = document.querySelector(".radioData");

//radioBill();
function radioBill () {
    
    var RadioBtn = document.querySelector("input[name='billItemType']:checked");
    radioInstance.add(RadioBtn.value);

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

Handlebars.registerHelper("warn",function radioBill (){
    if (radioLevel === "warning") {
        return true;
    }

})
Handlebars.registerHelper("danger", function radioBill (){
    if (radioLevel === "danger") {
        return true
    }
});

window.onload = function (){
    
    var radioDataHTML = radioUserTemp({
        call : "R" + radioInstance.call(),
        sms : "R" + radioInstance.sms(),
        total : "R" + radioInstance.total()
    });

    radioDataElem.innerHTML = radioDataHTML;
};