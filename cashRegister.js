//Cash Register
/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  let change = price - cash;
  let totalCashInDrawer = cashDrawerAdder(cid);
  let status = [OPEN, CLOSED, INSUFFICIENT_FUNDS];

  function cashDrawerAdder(cid) {
    let isValid = (/^\$?[\d,]+(\.\d*)?$/).test(cid) >= 0;

    if (isValid) {
      let str = "";
      cid.forEach(function(el) {str += el[0] + ', ' + el[1] + ', [' + el[2] + '] '});

      let num = Number(str.replace(/[\$,]/g, ''));
      num.reduce((acc, cur) => {
        acc + cur
      }, 0)
      return acc
    } else {
      return `Please enter a number.`;
    }

  }

  if (totalCashInDrawer = change) {
    let

    return `{status: ${status[1]}, change [${change}]}`
  } else if (totalCashInDrawer < change) {


    return `{status: ${status[2]}, change [${change}]}`
  } else {
    return `{status: ${status[0]}, change [${change}]}`
  }


}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))