// DOM element(s) references
const buyButton = document.querySelector(".topupNow");
const unitsUseable = document.querySelector(".unitsAvailable");
const unitsBought = document.querySelector(".totalUnits");
const totalAmountSpent = document.querySelector(".totalAmount");
const advanceTaken = document.querySelector(".advanceTaken");
const useButton = document.querySelector(".useNow")
const clearButton = document.querySelector(".Clear")
const radioBtn = document.querySelector("input[name='buyElectricity']:checked");
const radioButton = document.querySelector("input[name='useElectricity']:checked")




// Factory Function instance 
const electricity =  Electricity();

totalAmountSpent.innerHTML = localStorage.getItem("amount") || 0
unitsBought.innerHTML = localStorage.getItem("theUnits") || 0
unitsUseable.innerHTML = localStorage.getItem("unitsAvailable") || 0



// DOM events here 
buyButton.addEventListener("click",function(){
    var radioBtn = document.querySelector("input[name='buyElectricity']:checked");
    if(radioBtn.value == 'advance'){
        //electricity.advanceTaken()
        advanceTaken.classList.remove("hidden")
    }
    if(radioBtn){
        electricity.topUpElectricity(radioBtn.value);
        localStorage.setItem("theUnits", electricity.getUnitsAvailable());
        localStorage.setItem("amount",electricity.totalAmountSpent())
        var theUnitsBought = localStorage.getItem("theUnits");
        var amount = localStorage.getItem("amount")
        totalAmountSpent.innerHTML = amount;
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

clearButton.addEventListener("click",function(){
    localStorage.clear()
    document.querySelector("input[name='buyElectricity']:checked").checked = false;
    document.querySelector("input[name='useElectricity']:checked").checked = false;
    advanceTaken.classList.add("hidden")
})