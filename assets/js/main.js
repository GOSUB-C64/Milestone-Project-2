console.log("hi");

// function to keep the grid squares responsive.
function responsiveGrid() {
  var width = $(".tile").outerWidth();
  $(".tile").css("height", width);
}

$(document).ready(function () {
  responsiveGrid();
});
$(window).resize(function () {
  responsiveGrid();
});

// array to keep track of the tile Id's
let tileSeq = []; // holds next tile in
let answerSeq = []; // holds users guess for comparison later
var gameCount = 3; /* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user is successful */
var isClickEnabled = false;
var noOfClicks = 0;

// pick random number between 1 and 16 (inclusive) to represent a single tile within the 4x4 grid.
function pickTile() {
  var tile = Math.floor(Math.random() * 16) + 1;
  // build tileSeq array to hold pattern
  tileSeq.push(tile); /* add to array */
  return tile;
}
// assign each tile (div) its own color
function getColour(nextTile) {
  var nextColour = nextTile;
  var colourMap = {
    1: "Red",
    2: "Green",
    3: "Blue",
    4: "Yellow",
    5: "Orange",
    6: "Magenta",
    7: "White",
    8: "Violet",
    9: "Cyan",
    10: "Brown",
    11: "Grey",
    12: "Teal",
    13: "DeepPink",
    14: "GreenYellow",
    15: "GoldenRod",
    16: "IndianRed",
  };
  return colourMap[nextColour];
}
// display on screen and save current tile to 'currentTile'
function displayColouredTile(nextTile, colour) {
  var tileId = "#tile" + nextTile;
  $(tileId).css("background-color", colour);
  currentTile = tileId;
  return currentTile;
}

function blinkTile() {
  var tileId = pickTile(); // get a number between 1/16 inc
  var tileColor = getColour(tileId);
  displayColouredTile(tileId, tileColor);
  var intervalID = setInterval(() => {
    $("#tile" + tileId).css("background-color", "#000");
    if (tileSeq.length < gameCount) {
      blinkTile();
    } else {
      acceptUserInput();
    }
    clearTimeout(intervalID);
  }, 2000);
}

function acceptUserInput() {
  isClickEnabled = true;
}

////////// Main Game Logic //////////

blinkTile();
console.log(tileSeq);

$(".tile").click(function () {
  if (!isClickEnabled) return;

  var tileIdString = $(this).attr("id"); // build the ID of which of the 16 elements (divs) was clicked
  var tileId = parseInt(tileIdString.split("tile")[1]);
  console.log(tileId);
  answerSeq.push(tileId);

  // Glow the tile
  var tileColor = getColour(tileId);
  displayColouredTile(tileId, tileColor); // display users guess to screen grid
  var intervalID = setInterval(() => {
    $("#tile" + tileId).css("background-color", "#000");
    clearTimeout(intervalID);
  }, 2000);

  if (noOfClicks === gameCount) {
    // Seq same
    if (JSON.stringify(tileSeq) === JSON.stringify(answerSeq)) {
      alert("WIn");
      // Seq NOT same
    } else {
      alert("Lose");
    }
  } else if (tileId !== tileSeq[noOfClicks]) {
    console.log(tileId, tileSeq[noOfClicks]);
    alert("You Lose!");
  }
  noOfClicks++; // keep track of clicks to reference array index
});
