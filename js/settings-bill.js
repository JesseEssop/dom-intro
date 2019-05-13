// get a reference to the sms or call radio buttons
var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
// get refences to all the settings fields
var callCostSetting = document.querySelector(".callCostSetting")
var smsCostSetting = document.querySelector(".smsCostSetting")
var warningLevelSetting = document.querySelector(".warningLevelSetting")
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")

//get a reference to the add button
var billAddBtn = document.querySelector(".billAddBtn");
//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callTotal2 = 0;
var smsTotal2 = 0;
var total3 = 0
//add an event listener for when the 'Update settings' button is pressed
function update() {
    callCost = callCostSetting.value
    smsCost = smsCostSetting.value
    warningLevel = warningLevelSetting.value
    criticalLevel = criticalLevelSetting.value
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
        callTotal2 += 2.75
    }
    else if (billItemType === "sms") {
        smsTotal2 += 0.75;
    }

    //update the totals that is displayed on the screen.
    callTotalSettings.innerHTML = callTotal2.toFixed(2);
   
    smsTotalSettings.innerHTML  = smsTotal2.toFixed(2);
   
    totalSettings.innerHTML = callTotal2 + smsTotal2;
    

    if (total3 >= 50) {
        // adding the danger class will make the text red
        totalSettings.classList.add("danger");
    }
    else if (total3 >= 30) {
        totalSettings.classList.add("warning");
    }


}

billAddBtn.addEventListener('click', settingsBillTotal);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
