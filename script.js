let price = 19.5;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

const cashInput = document.getElementById('cash');
const changeDueDiv = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');


function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    if (change < 0) {
      alert("Customer does not have enough money to purchase the item");
      return;
    }
    if (change === 0) {
      changeDueDiv.textContent = "No change due - customer paid with exact cash";
      return;
    }

    let cidTotal = 0;
    for(let el of cid){
      cidTotal += el[1];
    }
    cidTotal = Math.round(cidTotal*100)/100
    if (cidTotal < change) {
        return "Status: INSUFFICIENT_FUNDS";
    }
    
     if (cidTotal === change){
      let changeString = "Status: CLOSED ";
      const currencyUnits = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };
     let changeArray = [];
        for (let i = cid.length - 1; i >= 0; i--) {
            const [currencyName, currencyAmount] = cid[i];
            if(currencyAmount > 0){
                changeArray.push([currencyName, currencyAmount])
            }

        }
       for (let i = 0; i < changeArray.length; i++) {
          changeString += `${changeArray[i][0]}: $${changeArray[i][1]} `;
       }
      
     return changeString.trimEnd();
     }


    const currencyUnits = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };

    let changeArray = [];
    for (let i = cid.length - 1; i >= 0; i--) {
        const [currencyName, currencyAmount] = cid[i];
        const currencyValue = currencyUnits[currencyName];
        let amountToGive = 0;

        while (change >= currencyValue && currencyAmount > amountToGive) {
            change = Math.round((change - currencyValue) * 100) / 100;
            amountToGive += currencyValue;

        }
         if (amountToGive > 0) {
            changeArray.push([currencyName, amountToGive]);
        }
    }
    
    if (change > 0) {
      return "Status: INSUFFICIENT_FUNDS";
    }
    
    let changeString = "Status: OPEN ";
     for (let i = 0; i < changeArray.length; i++) {
        changeString += `${changeArray[i][0]}: $${changeArray[i][1]} `;
    }
    return changeString.trimEnd();
};

purchaseBtn.addEventListener('click', () => {
    const cash = parseFloat(cashInput.value);
    const result = checkCashRegister(price, cash, cid);

    if (result){
       changeDueDiv.textContent = result;
    }


});