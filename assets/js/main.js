// function to keep the grid squares responsive.
function responsiveGrid() {
  var width = $(".tile").outerWidth();
  $(".tile").css("height", width);
}

// responsiveGrid();

$(document).ready(function () {
  responsiveGrid();
});
$(window).resize(function () {
  responsiveGrid();
});

function pickTile() {
  // pick random number between 1 and 16 to represent a single tile within the 4x4 grid.
  nextTile = Math.floor(Math.random() * 16) + 1;
  if(nextTile<10){
      var temp = nextTile;
      nextTile = '0' + temp;
  }
  tileSeq += nextTile;
  return nextTile;
}

function getColour(nextTile) {
  // pick another random number and assign it a colour.
  nextColour = nextTile;
  switch (nextColour) {
    case '01':
      colour = "Red";
      return colour;
    case '02':
      colour = "Green";
      return colour;
    case '03':
      colour = "Blue";
      return colour;
    case '04':
      colour = "Yellow";
      return colour;
    case '05':
      colour = "Orange";
      return colour;
    case '06':
      colour = "Magenta";
      return colour;
    case '07':
      colour = "White";
      return colour;
    case '08':
      colour = "Violet";
      return colour;
    case '09':
      colour = "Cyan";
      return colour;
    case 10:
      colour = "Brown";
      return colour;
    case 11:
      colour = "Grey";
      return colour;
    case 12:
      colour = "Teal";
      return colour;
    case 13:
      colour = "DeepPink";
      return colour;
    case 14:
      colour = "GreenYellow";
      return colour;
    case 15:
      colour = "GoldenRod";
      return colour;
    case 16:
      colour = "IndianRed";
      return colour;
  }
}

function displayColouredTile(nextTile, colour) {
  switch (nextTile) {
    case 1:
      $("#tile1").css("background-color", colour);
      break;
    case 2:
      $("#tile2").css("background-color", colour);
      break;
    case 3:
      $("#tile3").css("background-color", colour);
      break;
    case 4:
      $("#tile4").css("background-color", colour);
      break;
    case 5:
      $("#tile5").css("background-color", colour);
      break;
    case 6:
      $("#tile6").css("background-color", colour);
      break;
    case 7:
      $("#tile7").css("background-color", colour);
      break;
    case 8:
      $("#tile8").css("background-color", colour);
      break;
    case 9:
      $("#tile9").css("background-color", colour);
      break;
    case 10:
      $("#tile10").css("background-color", colour);
      break;
    case 11:
      $("#tile11").css("background-color", colour);
      break;
    case 12:
      $("#tile12").css("background-color", colour);
      break;
    case 13:
      $("#tile13").css("background-color", colour);
      break;
    case 14:
      $("#tile14").css("background-color", colour);
      break;
    case 15:
      $("#tile15").css("background-color", colour);
      break;
    case 16:
      $("#tile16").css("background-color", colour);
      break;
  }
}

// Main Game Logic
function setToGrid() {
  var nextTile = pickTile();
  var colour = getColour(nextTile);
  displayColouredTile(nextTile, colour);

  console.log("tileSeq = ", tileSeq, "nextTile = ", nextTile, colour);

}

// array to hold tile Id's
var tileSeq = [];

// gameCount will be used to keep track of each game.
var gameCount = 4;

// x is a loop counter.
var x = 1;

var intervalId = setInterval(function () {
  if (x === gameCount) {
    clearInterval(intervalId);
  }
  console.log("iteration", x);
  x++;
  var timeoutId = setTimeout(function () {
    setToGrid();
  }, 1000);
}, 1000);
