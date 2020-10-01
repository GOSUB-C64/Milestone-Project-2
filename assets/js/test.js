function selectNumber() {
  var numArr = [];
  var num = 0;
  var index = 1;

  while (index < 10) {
    num = Math.floor(Math.random() * 16) + 1;
    if (numArr === []) {
      numArr.push(num);
    } else {
      if (num != numArr[index]) {
        numArr.push(num);
        index++;
      }
    }
  }
  console.log(numArr);
}


selectNumber();
