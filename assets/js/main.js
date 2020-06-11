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
  //   nextTile = 6;
  // build tileSeq array to hold pattern
  // keep array to 2 digits for each number -- (i.e. 2 becomes 02, 8 becomes 08)
  // this makes it easier to work with later.
  if (nextTile < 10) {
    var temp = nextTile;
    tileSeq += "0" + temp;
  } else {
    tileSeq += nextTile;
  }
  return nextTile;
}

function getColour(nextTile) {
  // pick another random number and assign it a colour.
  nextColour = nextTile;
  switch (nextColour) {
    case 1:
      colour = "Red";
      return colour;
    case 2:
      colour = "Green";
      return colour;
    case 3:
      colour = "Blue";
      return colour;
    case 4:
      colour = "Yellow";
      return colour;
    case 5:
      colour = "Orange";
      return colour;
    case 6:
      colour = "Magenta";
      return colour;
    case 7:
      colour = "White";
      return colour;
    case 8:
      colour = "Violet";
      return colour;
    case 9:
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
      //   $("#tile6").addClass(active);
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

function setTile() {
  var nextTile = pickTile();
  var colour = getColour(nextTile);
  // gameCount will be used to keep track of each game.
  console.log("tileSeq = ", tileSeq, "nextTile = ", nextTile, colour);
  displayColouredTile(nextTile, colour)
}

// array to keep track of the tile Id's
let tileSeq = [];
var gameCount = 2;

// Main Game Logic
for (var i=1; i<=5; i++) {
     // x is a loop counter for the setInterval function.
  let x = 1;
  let gameSpeed = 1000;
  let interval = setInterval(setTile(), gameSpeed)
    if (x === gameCount) {
      clearInterval(interval);
    }
    console.log("iteration", x);
    x++;
}

