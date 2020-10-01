function selectNumber() {
  var numArr = [];
  var num = 0;
  var count = 1;
  var duplicate = 0;

  while (count <= 10) {
    num = Math.floor(Math.random() * 12) + 1;
    if (numArr.length === 0) {
      console.log("empty array getting 1st element");
      numArr.push(num);
    } else {
      debugger;
      for (var index = 0; index < numArr.length; index++) {
        if (numArr[index] === num) {
          duplicate = 1;
          break;
        } else {
          numArr.push(num);
        }
      }
    }
    if (duplicate) {
      duplicate = 0;
    } else {
      count++;
    }
  }
  console.log(numArr);
}

selectNumber();

// var arr1 = [];
// var arr = [];
// arr[0] = 7;
// var x = 7;
// if(arr[0] === x){
//     console.log("A Match!");
// }
// if(arr1 = []){
//   console.log("Blank");
// } else {
//   console.log("FULL");
// }
