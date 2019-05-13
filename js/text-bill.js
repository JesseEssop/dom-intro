// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText");
var callTotalElement = document.querySelector(".callTotalOne");
var smsTotalElement = document.querySelector(".smsTotalOne");
var totalOneElement = document.querySelector(".totalOne");

//get a reference to the add button
var addToBillBtn = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var totalOne = 0;
var callsTotalOne = 0;
var smsTotalOne = 0;
//add an event listener for when the add button is pressed
function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.trim();
    // update the correct total
    if (billTypeEntered === "call") {
        callsTotalOne += 2.75
    }
    else if (billTypeEntered === "sms") {
        smsTotalOne += 0.75;
    }

    //update the totals that is displayed on the screen.
    var callsTotal = callsTotalOne.toFixed(2);
    callTotalElement.innerHTML = callsTotal;
    var smsTotal = smsTotalOne.toFixed(2);
    smsTotalElement.innerHTML = smsTotal
    var totalOne = callsTotalOne + smsTotalOne;
    totalOneElement.innerHTML = totalOne;

    if (totalOne >= 50) {
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalOne >= 30) {
        totalOneElement.classList.add("warning");
    }


}

addToBillBtn.addEventListener('click', textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
