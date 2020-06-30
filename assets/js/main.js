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

// pick random number between 1 and 16 to represent a single tile within the 4x4 grid.
function pickTile() {
  nextTile = Math.floor(Math.random() * 16) + 1;

  // build tileSeq array to hold pattern
  tileSeq.push(nextTile); /* add to array */

  return nextTile;
}

// assign each tile (div) its own color
function getColour(nextTile) {
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

// display on screen and save this current tile to 'currentTile'
function displayColouredTile(nextTile, colour) {
  switch (nextTile) {
    case 1:
      $("#tile1").css("background-color", colour);
      currentTile = "#tile1";
      break;
    case 2:
      $("#tile2").css("background-color", colour);
      currentTile = "#tile2";
      break;
    case 3:
      $("#tile3").css("background-color", colour);
      currentTile = "#tile3";
      break;
    case 4:
      $("#tile4").css("background-color", colour);
      currentTile = "#tile4";
      break;
    case 5:
      $("#tile5").css("background-color", colour);
      currentTile = "#tile5";
      break;
    case 6:
      $("#tile6").css("background-color", colour);
      currentTile = "#tile6";
      break;
    case 7:
      $("#tile7").css("background-color", colour);
      currentTile = "#tile7";
      break;
    case 8:
      $("#tile8").css("background-color", colour);
      currentTile = "#tile8";
      break;
    case 9:
      $("#tile9").css("background-color", colour);
      currentTile = "#tile9";
      break;
    case 10:
      $("#tile10").css("background-color", colour);
      currentTile = "#tile10";
      break;
    case 11:
      $("#tile11").css("background-color", colour);
      currentTile = "#tile11";
      break;
    case 12:
      $("#tile12").css("background-color", colour);
      currentTile = "#tile12";
      break;
    case 13:
      $("#tile13").css("background-color", colour);
      currentTile = "#tile13";
      break;
    case 14:
      $("#tile14").css("background-color", colour);
      currentTile = "#tile14";
      break;
    case 15:
      $("#tile15").css("background-color", colour);
      currentTile = "#tile15";
      break;
    case 16:
      $("#tile16").css("background-color", colour);
      currentTile = "#tile16";
      break;
  }
}
// putting it together
function setTile() {
  if (iteration < gameCount) {
    ++iteration;
    nextTile = pickTile();
    colour = getColour(nextTile);
    displayColouredTile(nextTile, colour);
    tileArray.push(currentTile);
  } else {
    clearInterval(interval);
    console.log("**** FINISHED ****");
  }
  console.log(
    "tileSeq =",
    tileSeq,
    "nextTile =",
    nextTile,
    "colour =",
    colour,
    "gameCount =",
    gameCount,
    "iteration =",
    iteration,
    "currentTile =",
    currentTile,
    "tileArray =",
    tileArray
  );
}

function clearTile() {
  $(currentTile).css("background-color", "#000");
  // clearInterval(interval2);
}

$("div").addClass("clearTiles");

// array to keep track of the tile Id's
let tileSeq = [];

let tileArray = [];

var nextTile;
var colour;
var currentTile;

var setTileDelay = 1500;
var clearTileDelay = setTileDelay - 400;

var iteration = 0; /* loop counter for the setInterval function */
var gameCount = 3 /* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user is successful */

let interval;
let interval2;

let gridID;

// gridID is going to be used to hold the ID of the tile which was clicked

mainDelay = setTileDelay * gameCount + clearTileDelay * gameCount;
// mainDelay is the total amount of time to wait until all timers are complete before checking user input //

////////// Main Game Logic //////////

interval = setInterval(setTile, setTileDelay, iteration, gameCount);
interval2 = setInterval(clearTile, clearTileDelay);

// which tile was clicked? //
let index = -1;
let clicked = 0;
let correct = 0;
let timer = setTimeout(function () {
  $(".tile").click(function () {
    if (clicked < gameCount) {
      index += 1;
      clicked += 1;
      console.log("Tile Clicked!");
      gridID = "#" + $(this).attr("id");
      console.log(`${index} checking ${gridID} against ${tileArray[index]}`);
      if (gridID === tileArray[index]) {
        correct++;
        console.log(gridID);
        console.log(`${correct} CORRECT!`);
      } else {
        // Wrong!
        console.log("INCORRECT!");
        console.log(gridID);
      }
    } else {
        gameCount = 1;
        clearTimeout(timer);
    }
    if(correct === gameCount){
        gameCount++;
    }
  });
}, mainDelay);

// I need to keep track of the users clicks
// i.e. when click happens, keep a counter to track the number of clicks
// then use that number to check the ID of the square clicked against the indexed array using " no.of clicks" as the index
