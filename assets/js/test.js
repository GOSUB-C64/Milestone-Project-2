///  global variables  ///

let numArr = [];

///  functions  ///

function numSeq() {
  var randNum = Math.floor(Math.random() * 16) + 1;

  return randNum;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

///  code logic  ///
var currentNum = 1; // counter
let num = numSeq();
numArr.push(num);
var flagged = false;

while (currentNum < 10) {
  if (currentNum > 1) {
    for (let x = 1; x <= currentNum; x++) {
      console.log(x, num);
      debugger;
      if (num === numArr[x]) {
        flagged = true;
        console.log("TRUE");
        // x = currentNum;
      } else {
        numArr.push(num);
      }
    }
    if (flagged) {
      console.log("FLAGGED!!!");
      flagged = false;
      numArr.pop();
    }
  }
  num = numSeq();
  currentNum++;
}
console.log(numArr);

// numArr.push(numSeq());
// console.log(numArr);
