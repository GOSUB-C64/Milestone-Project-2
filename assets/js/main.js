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

let tileId, tileColor, tileIdString;
let tileSeq = []; // holds next tile in
let answerSeq = []; // holds users guess for comparison later
let tileColorSeq = []; // store colours of tiles
var gameCount = 3; /* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user is successful */
var isClickEnabled = false;
var noOfClicks = 0;
var index = 0;

// pick random number between 1 and 16 (inclusive) to represent a single tile within the 4x4 grid.
function pickTile() {
  var tile = Math.floor(Math.random() * 16) + 1;
  // build tileSeq array to hold pattern
  for (let i = 0; tileSeq.length; i++) {
      console.log(i);
    if (i === 0) {
        console.log("I===0");
      tileSeq.push(tile);
    } else if (tileSeq[i] === tileSeq[i - 1]) {
        console.log("***");
      pickTile();
    } else {
      tileSeq.push(tile); /* add to array */
    }
  }
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
  var tileId = "#tile" + nextTile; // build element ID
  $(tileId).css("background-color", colour);
  return;
}

function displayCurrentSeq(tileSeq, x) {
  isClickEnabled = false;
  console.log("IN displayCurrentSeq fn");

  tileId = tileSeq[x];
  tileColor = tileColorSeq[x];
  displayColouredTile(tileId, tileColor); // this line works
  var intervalID = setInterval(() => {
    $("#tile" + tileId).css("background-color", "#000");
    if (x < tileSeq.length) {
      console.log("IN if statement of displayCurrentSeq fn");

      x++;
      displayCurrentSeq(tileSeq, x);
    } else {
      acceptUserInput();
    }
    clearTimeout(intervalID);
    console.log("TIMEOUT CLEARED!!");
  }, 1000);
  return;
}

function blinkTile() {
  tileId = pickTile(); // get a number between 1/16 inc
  tileColor = getColour(tileId);
  tileColorSeq.push(tileColor);
  displayColouredTile(tileId, tileColor);
  //////
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

console.log("clicks(outside) = ", noOfClicks);
if (noOfClicks === gameCount) {
  console.log("FINAL TEST");
  // Seq same
  if (JSON.stringify(tileSeq) === JSON.stringify(answerSeq)) {
    alert("WIn");
  }
}

$(".tile").click(function () {
  if (!isClickEnabled) return;
  //   $(tileSeq[gameCount-1]).css("background-color", "#000");

  noOfClicks++;
  if (noOfClicks <= gameCount) {
    console.log("clicks = ", noOfClicks);

    tileIdString = $(this).attr("id"); // build the ID of which of the 16 elements (divs) was clicked
    tileId = parseInt(tileIdString.split("tile")[1]);
    console.log(tileId);
    answerSeq.push(tileId);

    // Glow the tile
    var tileColor = getColour(tileId);
    displayColouredTile(tileId, tileColor); // display users guess to screen grid

    // (un)-glow the tile
    var intervalID = setInterval(() => {
      $("#tile" + tileId).css("background-color", "#000");
      debugger;
      clearTimeout(intervalID);
    }, 1000);
  }
  console.log("NUMBER OF CLICKS = ", noOfClicks);

  if (tileId !== tileSeq[index]) {
    console.log(tileId, tileSeq[index]);
    alert("! GAME OVER !");
    debugger;
  } else if (noOfClicks === gameCount) {
    console.log("comparing noOfClicks to gameCount!!!");
    //   $(".tile").off("click");
    gameCount++; // increment game level (add 1 more tile)
    noOfClicks = 0; // reset the clicks

    answerSeq = []; // clear out the users' answer array
    index = 0;

    tileId = pickTile(); // get a number between 1/16 inc
    tileColor = getColour(tileId);
    tileColorSeq.push(tileColor);
    let x = 0;
    displayCurrentSeq(tileSeq, x);
  } else {
    index++;
  }
});
