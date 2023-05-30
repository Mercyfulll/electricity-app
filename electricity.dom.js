// DOM element(s) references
const buyButton = document.querySelector(".topupNow");
const unitsUseable = document.querySelector(".unitsAvailable");
const unitsBought = document.querySelector(".totalUnits");
const totalAmountSpent = document.querySelector(".totalAmount");
const advanceTaken = document.querySelector(".advanceTaken");
const useButton = document.querySelector(".useNow")
const radioBtn = document.querySelector("input[name='buyElectricity']:checked");
const radioButton = document.querySelector("input[name='useElectricity']:checked")




// Factory Function instance 
const electricity =  Electricity();

unitsBought.innerHTML = localStorage.getItem("theUnits") || 0


// DOM events here 
buyButton.addEventListener("click",function(){
    var radioBtn = document.querySelector("input[name='buyElectricity']:checked");
    if(radioBtn){
        electricity.topUpElectricity(radioBtn.value);
        localStorage.setItem("theUnits", electricity.getUnitsAvailable());
        var theUnitsBought = parseInt(localStorage.getItem("theUnits"));
        unitsBought.innerHTML = theUnitsBought;
    }
})

useButton.addEventListener("click",function(){
    var radioButton = document.querySelector("input[name='useElectricity']:checked");
    if(radioButton){
        electricity.useAppliance(radioButton.value)
        localStorage.setItem("unitsAvailable",electricity.getUnitsAvailable());
        unitsUseable.innerHTML = localStorage.getItem("unitsAvailable");
        
    }    

})