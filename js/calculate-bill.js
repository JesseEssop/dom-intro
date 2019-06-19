
var billStringElement = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal")
var calculateBtn = document.querySelector(".calculateBtn");
var totalBill = 0;
var billInstance = CalculateManager();



function calculateBtnClicked() {
    var billString = billStringElement.value;
    billInstance.add(billString);
    
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.add(billInstance.level());
    billTotalElement.innerHTML = billInstance.total();

}
 


calculateBtn.addEventListener('click', calculateBtnClicked)