
var billStringElement = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal")
var calculateBtn = document.querySelector(".calculateBtn");
var billInstances = CalculateManager();



function calculateBtnClicked() {
    billInstances.add(billStringElement.value);
    
    //billTotalElement.classList.remove("warning");
    //billTotalElement.classList.remove("danger");
    billTotalElement.classList.add(billInstances.level());
    billTotalElement.innerHTML = billInstances.total();
}
calculateBtn.addEventListener('click', calculateBtnClicked)