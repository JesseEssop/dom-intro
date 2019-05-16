// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var billAddBtn = document.querySelector(".billAddBtn");
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callTotal2 = 0;
var smsTotal2 = 0;
var total3 = 0;
//add an event listener for when the 'Update settings' button is pressed
function update() {
    callCost = Number(callCostSetting.value);
    smsCost = Number(smsCostSetting.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);

    if (total3 >= warningLevel) {
        // adding the danger class will make the text red
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if (total3 >= criticalLevel) {
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");
    }
    if (total3 < warningLevel) {
        // adding the danger class will make the text red
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");
    }
    if (total3 >= criticalLevel){
        billAddBtn.removeEventListener('click', settingsBillTotal)

    }
    else{
        billAddBtn.addEventListener('click', settingsBillTotal)
    }


}

//add an event listener for when the add button is pressed
function settingsBillTotal() {


    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    // update the correct total
    if (billItemType === "call") {
        callTotal2 += callCost;
    }
    else if (billItemType === "sms") {
        smsTotal2 += smsCost;
    }

    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = callTotal2.toFixed(2);

    smsTotalSettings.innerHTML = smsTotal2.toFixed(2);
    total3 = smsTotal2 + callTotal2;
    totalSettings.innerHTML = total3.toFixed(2);



    if (total3 >= warningLevel) {
        // adding the danger class will make the text red
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if (total3 >= criticalLevel) {
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");
    }
    if (total3 < warningLevel) {
        // adding the danger class will make the text red
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");
    }
    if (total3 >= criticalLevel){
        billAddBtn.removeEventListener('click', settingsBillTotal)

    }


}

billAddBtn.addEventListener('click', settingsBillTotal);
updateSettings.addEventListener('click', update);




//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
