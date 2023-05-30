function Electricity() {

    let unitsAvailable = 0
    let totalUnits = 0
    let totalAmount = 0
    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {
        if(amount == 50){
            unitsAvailable += 35
        }
        else if(amount == 20){
            unitsAvailable = unitsAvailable + 14
        }
        else if(amount == 10){
            unitsAvailable = unitsAvailable + 7
        }
        else if(amount === 'advance'){
            unitsAvailable += 21
        }        

    }

    function getUnitsAvailable() {
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if(appliance == "TV" && unitsAvailable >= 3){
            unitsAvailable -= 3
            return true
        }
        if(appliance === "Kettle" && unitsAvailable >= 5){
            unitsAvailable -= 5
            return true
        }
        if(appliance === "stove" && unitsAvailable >= 10){
            unitsAvailable -= 10
            return true
        }
        if(appliance === "Fridge" && unitsAvailable >= 13){
            unitsAvailable -= 13
            return true
        }
        else{
            return false
        }
    }

    function advanceTaken() {
        var isUsed = false;
        if(!isUsed){
            isUsed = true;
            unitsAvailable += 21
        }else{
            return false;
        }
    }

    function totalAmountSpent() {
    }

    function totalUnitsBought(){
            
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}