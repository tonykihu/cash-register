const customerCash = document.getElementById('cash');
const purchaseButton = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');
const drawerStatus = document.getElementById('status');
const penny = document.getElementById('penny');
const nickel = document.getElementById('nickel');
const dime = document.getElementById('dime');
const quarter = document.getElementById('quarter');
const one = document.getElementById('one');
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const twenty = document.getElementById('twenty');
const hundred = document.getElementById('hundred');
const total = document.getElementById('total');

let price = 20;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

let totalCid = cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2); 

penny.textContent = cid[0][1];
nickel.textContent = cid[1][1];
dime.textContent = cid[2][1];
quarter.textContent = cid[3][1];
one.textContent = cid[4][1];
five.textContent = cid[5][1];
ten.textContent = cid[6][1];
twenty.textContent = cid[7][1];
hundred.textContent = cid[8][1];
total.textContent = totalCid;


purchaseButton.addEventListener('click', () => {
  const customerCashValue = customerCash.value;
  const change = customerCashValue - price;
  changeDue.textContent = `Change: $${change}`
  if (customerCashValue === "") {
    alert("Please provide cash amount");
  } else if (customerCashValue < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (customerCashValue == price){
    changeDue.textContent = "No change due - customer paid with exact cash";
  }
  
  if (totalCid < change) {
    drawerStatus.innerHTML = "INSUFFICIENT_FUNDS";
  } else if (totalCid === change) {
    drawerStatus.textContent = `CLOSED`;
  } else {
    drawerStatus.textContent = "OPEN";
  }
  
});

