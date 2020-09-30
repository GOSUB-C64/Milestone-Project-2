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

while (currentNum < 10) {
  if (currentNum > 1) {
    for (var x = 1; x <= currentNum; x++) {
      console.log(x);
      if (num === numArr[x]) {
        console.log("TRUE");
        num = numSeq();
        numArr.push(num);
      }
    }
  }
  currentNum++;
  num = numSeq();
  numArr.push(num);
}
console.log(numArr);

// numArr.push(numSeq());
// console.log(numArr);
