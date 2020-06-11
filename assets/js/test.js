
function printStuff() {
  console.log("working!");
}
var x = 1;
const interval = 1000;
var myInterval;

if (x <= 10) {
  myInterval = setInterval(printStuff, interval);
  x++;

} else {

  clearInterval(myInterval);
  x = 0;
  
}
