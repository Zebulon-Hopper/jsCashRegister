//This register uses loops
function checkCashRegister(price, cash, cid) {
  // line 3 declares variables
  let output = { status: null, change: []},
   change = cash - price, 
   cid1 = cid.map(arr => [...arr]), 
   cid2 = cid, 
   cidArr = [], 
   cidTotal = 0, 
   cidVal = [.01,.05,.10,.25,1,5,10,20,100];

  // cid total before any updates
  for(let i=0; i<cid1.length;i++){
    cidTotal+=cid1[i][1];
  }
  console.log(cidTotal)
  // determines if cid total is this same as change
 if (change==cidTotal) {
    output.status = 'CLOSED';
    output.change = cid1;
    return output;
   }
  // lines 21 through 30 updates the change and the cid  
  for(let i=8; i>=0; i--){
     while(change>=cidVal[i]&&cid2[i][1]>0){
      change-=cidVal[i];
      cid2[i][1]-=cidVal[i];
    }
  } 
  if(change>0 && change<.01){
    change=0;
    cid2[0][1]-=cidVal[0];
 }
//  lines 32 through 37 compare the cid after updates with the original cid
  for(let i=0; i<cid1.length;i++){
    if(cid1[i][1]!=cid2[i][1]){
     cid1[i][1]-=cid2[i][1];
     cidArr.unshift(cid1[i]);
    }
 }
// converts updated cidArr to fixed numbers
for(let i=0; i<cidArr.length;i++){
cidArr[i][1] = Number(cidArr[i][1].toFixed(2));
}
// cid total after updates
for(let i=0; i<cidArr.length;i++){
  cidTotal+=cidArr[i][1];
}
// lines 47 through 56 are outputs
if(change < cidTotal && change==0){
 output.status = 'OPEN';
 output.change = cidArr;
 return output;
}
else if (change > 0 && cidTotal>0) {
  output.status = 'INSUFFICIENT_FUNDS';
  return output;
 }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(5.93,40,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
