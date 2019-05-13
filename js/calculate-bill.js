// get a reference to the textbox where the bill type is to be entered
var billStringElement = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal")
//get a reference to the add button
var calculateBtn = document.querySelector(".calculateBtn");
//create a variable that will keep track of the total bill
var totalBill = 0;
//add an event listener for when the add button is pressed
function calculateBtnClicked(){
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call") {
            billTotal += 2.75;
        }
        else if (billItem === "sms") {
            billTotal += 0.75;
        }
    }

    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    
    if((roundedBillTotal >= 20)  || (roundedBillTotal < 30)){
        billTotalElement.classList.add("warning");
        billTotalElement.classList.remove("danger");
    }
    if (roundedBillTotal >= 30){
        billTotalElement.classList.add("danger");
        billTotalElement.classList.remove("warning");
    }
if (roundedBillTotal < 20 ){
        billTotalElement.classList.remove("danger");
        billTotalElement.classList.remove("warning");
    }
}


calculateBtn.addEventListener('click', calculateBtnClicked);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
