//This register uses functional recursion
function checkCashRegister(price, cash, cid) {
  // line 4 declares variables
  let output = { status: null, change: []},changeDue = (Math.round((cash - price) * 100) / 100),cid1 = cid.map(arr => [...arr]),cid2 = cid,cidArr = [],cidTotal = 0,strChangeDue = changeDue.toString(),d = strChangeDue.slice(0,strChangeDue.indexOf('.')),c = strChangeDue.slice(strChangeDue.indexOf('.'));
  c=Number(c);
  d=Number(d);
  console.log(cid1)
  // lines 7 through 33
let dollar=()=>{
  if(d>=100 && cid2[8][1]>=100){
    cid2[8][1]-=100;
    d-=100;
   dollar()
   }
  else if(d>=20 && cid2[7][1]>=20){
    cid2[7][1]-=20;
    d-=20;
    dollar()
  }
  else if(d>=10 && cid2[6][1]>=10){
    cid2[6][1]-=10;
    d-=10;
    dollar()
  }
  else if(d>=5 && cid2[5][1]>=5){
    cid2[5][1]-=5;
    d-=5;
    dollar()
  }
  else if(d>0 && cid2[4][1]>=1){
    cid2[4][1]-=1;
    d-=1;
   dollar()
  }
 }
dollar()
// lines 36 through 60
let cents=()=>{
  if(c>=.25 && cid2[3][1]>=.25){
    cid2[3][1]-=.25;
    c-=.25;
    cents()
  }
  else if(c>=.10 && cid2[2][1]>=.10){
    cid2[2][1]-=.10;
    c-=.10;
    cents()
}
  else if(c>=.05 && cid2[1][1]>=.05){
    cid2[1][1]-=.05;
    c-=.05;
    cents()
}
else if(c>.00 && cid2[0][1]>=.00){
  cid2[0][1]=cid2[0][1].toFixed(2);
  cid2[0][1]-=.01;
  c=c.toFixed(2);
  c-=.01;
  cents()
}
}
cents()
//  lines 61 through 67 compare the cid after updates with the original cid
for(let i=0; i<cid1.length;i++){
   if(cid1[i][1]!=cid2[i][1]){
    (cid1[i][1]-=cid2[i][1]).toFixed(2);
    cidArr.unshift(cid1[i]);
   }
}
// this loop converts cid to numbers and to fixed
for(let i=0; i<cidArr.length;i++){
cidArr[i][1]=Number(cidArr[i][1].toFixed(2));
 }

// this loop gets the cid total after updates
for(let i=0; i<cid2.length;i++){
   cidTotal+=cid2[i][1];
}
// lines 78 through 94 are the outputs
if(cidTotal>0 && c+d==0){
  output.status = 'OPEN';
  output.change = cidArr;
  return output;
}
else if (c+d==0 && cidTotal==0) {
  output.status = 'CLOSED';
  output.change = cid1;
  return output;
}
else if (c+d>0) {
  output.status = 'INSUFFICIENT_FUNDS';
  return output;
}
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])) 

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(5.93,40,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))