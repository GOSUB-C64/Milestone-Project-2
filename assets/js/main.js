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

// array to hold tile Id's
var tileSeq = [];

function pickTile() {
  // pick random number between 1 and 16 to represent a single tile within the 4x4 grid.
  var nextTile = Math.floor(Math.random() * 16) + 1;
  tileSeq += nextTile;
  return nextTile;
}

function getColour() {
  // pick another random number and assign it a colour.
  var nextColour = Math.floor(Math.random() * 16) + 1;

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
var gameOver = 0;


  nextTile = pickTile();
  colour = getColour();
  displayColouredTile(nextTile, colour);

  console.log(tileSeq, colour);

