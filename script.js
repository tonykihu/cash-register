const customerCash = document.getElementById('cash');
const purchaseButton = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');

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

purchaseButton.addEventListener('click', () => {
  const customerCashValue = customerCash.value;
  const change = customerCashValue - price;
  //changeDue.textContent = `Change: $${change}`
  if (customerCashValue === "") {
    alert("Please provide cash amount");
  } else if (customerCashValue < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (customerCashValue == price){
    changeDue.textContent = "No change due - customer paid with exact cash";
  }
});
