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

// pick random number between 1 and 16 (inclusive) to represent a single tile within the 4x4 grid.
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
      return;
    case 2:
      colour = "Green";
      return;
    case 3:
      colour = "Blue";
      return;
    case 4:
      colour = "Yellow";
      return;
    case 5:
      colour = "Orange";
      return;
    case 6:
      colour = "Magenta";
      return;
    case 7:
      colour = "White";
      return;
    case 8:
      colour = "Violet";
      return;
    case 9:
      colour = "Cyan";
      return;
    case 10:
      colour = "Brown";
      return;
    case 11:
      colour = "Grey";
      return;
    case 12:
      colour = "Teal";
      return;
    case 13:
      colour = "DeepPink";
      return;
    case 14:
      colour = "GreenYellow";
      return;
    case 15:
      colour = "GoldenRod";
      return;
    case 16:
      colour = "IndianRed";
      return;
  }
}

// display on screen and save current tile to 'currentTile'
function displayColouredTile(nextTile, colour) {
  switch (nextTile) {
    case 1:
      $("#tile1").css("background-color", colour);
      currentTile = "#tile1";
      return currentTile;
    case 2:
      $("#tile2").css("background-color", colour);
      currentTile = "#tile2";
      return currentTile;
    case 3:
      $("#tile3").css("background-color", colour);
      currentTile = "#tile3";
      return currentTile;
    case 4:
      $("#tile4").css("background-color", colour);
      currentTile = "#tile4";
      return currentTile;
    case 5:
      $("#tile5").css("background-color", colour);
      currentTile = "#tile5";
      return currentTile;
    case 6:
      $("#tile6").css("background-color", colour);
      currentTile = "#tile6";
      return currentTile;
    case 7:
      $("#tile7").css("background-color", colour);
      currentTile = "#tile7";
      return currentTile;
    case 8:
      $("#tile8").css("background-color", colour);
      currentTile = "#tile8";
      return currentTile;
    case 9:
      $("#tile9").css("background-color", colour);
      currentTile = "#tile9";
      return currentTile;
    case 10:
      $("#tile10").css("background-color", colour);
      currentTile = "#tile10";
      return currentTile;
    case 11:
      $("#tile11").css("background-color", colour);
      currentTile = "#tile11";
      return currentTile;
    case 12:
      $("#tile12").css("background-color", colour);
      currentTile = "#tile12";
      return currentTile;
    case 13:
      $("#tile13").css("background-color", colour);
      currentTile = "#tile13";
      return currentTile;
    case 14:
      $("#tile14").css("background-color", colour);
      currentTile = "#tile14";
      return currentTile;
    case 15:
      $("#tile15").css("background-color", colour);
      currentTile = "#tile15";
      return currentTile;
    case 16:
      $("#tile16").css("background-color", colour);
      currentTile = "#tile16";
      return currentTile;
  }
}

function displayAllTiles() {
  for (let x = 0; x < gameCount; x++) {
    setTimeout(function () {
      $(tileArray[x]).css("background-color", colArray[x]);
    }, 2000);
  }

  //   setTimeout(function () {
  //     for (let x = 0; x < gameCount; x++) {
  //       $(tileArray[x]).css("background-color", "#000");
  //     }
  //   }, 1000);
  console.log("displaying all tiles");
}

// putting it together
function setTile() {
  if (iteration < gameCount) {
    nextTile = pickTile(); // get a number between 1/16 inc
    getColour(nextTile);
    displayColouredTile(nextTile, colour);
    colArray.push(colour);
    iteration++;
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
  //clearInterval(interval2);
}
function clearAllTiles() {
  $("div").addClass("clearTiles");
}
// array to keep track of the tile Id's
let tileSeq = []; // holds next tile in

let tileArray = [];

var nextTile;
let colour;
let colArray = [];
var currentTile;

var setTileDelay = 1500;
var clearTileDelay = setTileDelay - 400;

var iteration = 0; /* loop counter for the setInterval function */
var gameCount = 3; /* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user is successful */
let correct = 0;
let interval;
let interval2;

let gridID;
let userClickGridID;
// gridID is going to be used to hold the ID of the tile which was clicked

let mainDelay = setTileDelay * gameCount + clearTileDelay * gameCount;
// mainDelay is the total amount of time to wait until all timers are complete before checking user input //

let index = -1;
let clicked = 0;

startGame();

function startGame() {
  interval = setInterval(setTile, setTileDelay, iteration, gameCount);
  interval2 = setInterval(clearTile, clearTileDelay);
}

////////// Main Game Logic //////////

let timer = setInterval(function () {
  console.log("READY......");
  // if user's guess is correct then execute code in this 'IF'
  if (correct !== gameCount) {
    $(".tile").click(function () {
      clicked++; // keep track of clicks to reference array index

      // do the number of guesses == the number of grid squares illuminated in this round?
      if (clicked <= gameCount) {
        index++; // index is used to compare tile clicked with computers choice
        console.log("Tile Clicked!");
        gridID = "#" + $(this).attr("id"); // build the ID of which of the 16 elements (divs) was clicked
        userClickGridID = gridID.slice(5); // remove 1st five characters from the ID leaving only the number part to return the colour
        userClickGridID = parseInt(userClickGridID); // convert string to number
        console.log(userClickGridID);

        setTimeout(function () {
          colour = getColour(userClickGridID); // get corresponding grid colour
          
          console.log("userColour =", colour);

          $("#gridID").css("background-color", "#00ffff"); // set colour
          console.log(
            `${index} checking ${gridID} against ${tileArray[index]}`
          );
        }, 1000);

        // check user's guess against the array index of tileArray //
        // no need to check the colour                             //
        if (gridID === tileArray[index]) {
          correct++; // user's guess was correct!
          console.log(gridID);
          console.log(`${correct} CORRECT!`);
          setInterval(function () {
            $(gridID).css("background-color", "#000");
            // its correct but are all guesses correct?
            if (correct == gameCount) {
              console.log("WINNER!!!");
              clearInterval(timer);
              clearInterval(interval);
              clearInterval(interval2);
              clicked = 0;
              correct = 0;
              index = -1;

              gameCount++; // increment game level by 1
              startGame(); // get new grid square
              displayAllTiles(); // display sequence again
              //   clearAllTiles();
              // } else if (clicked === gameCount && correct !== gameCount) {
              //   console.log("GameOver - you did not match all squares!");
            }
          }, 500);
        } else {
          // Incorrect guess during sequence - at this point the game ends ***
          console.log("INCORRECT! GAMEOVER!!");
          console.log(gridID);
          setInterval(function () {
            $(gridID).css("background-color", "#000");
            clearInterval(timer);
            clearInterval(interval);
            clearInterval(interval2);
            clicked = 0;
            correct = 0;
            index = -1;
          }, 500);
        }
      }
    });
  }
}, mainDelay);

// TODO:
// * = done

// I need to keep track of the users clicks *
// i.e. when click happens, keep a counter to track the number of clicks *
// then use that number to check the ID of the square clicked against the indexed array using " no.of clicks" as the index *

// ***
// now I need the game to advance to next level when successful
// or end the game when the user's guess is incorrect!
// need to refactor above code and put it in functions
