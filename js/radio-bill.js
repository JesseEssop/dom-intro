// get a reference to the textbox where the bill type is to be entered
var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoElement = document.querySelector(".totalTwo");
 
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var callsTotalTwo = 0;
var smsTotalTwo = 0;

//add an event listener for when the add button is pressed
function radioBillTotal() {

   
    // get the value entered in the billType textfield
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }
    // update the correct total
    if (billItemType === "call") {
        callsTotalTwo += 2.75
    }
    else if (billItemType === "sms") {
        smsTotalTwo += 0.75;
    }

    //update the totals that is displayed on the screen.
    var callsTotal2 = callsTotalTwo.toFixed(2);
    callTotalTwoElement.innerHTML = callsTotal2;
    var smsTotal2 = smsTotalTwo.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal2
    var total2 = callsTotalTwo + smsTotalTwo;
    totalTwoElement.innerHTML = total2;

    if (total2 >= 50) {
        // adding the danger class will make the text red
        totalTwoElement.classList.add("danger");
    }
    else if (total2 >= 30) {
        totalTwoElement.classList.add("warning");
    }


}

radioBillAddBtn.addEventListener('click', radioBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
