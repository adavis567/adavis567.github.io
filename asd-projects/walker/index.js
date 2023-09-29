/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40
  }

  // Game Item Objects
  var walker = {
    "x-coordinate": 0,
    "y-coordinate": 0,
    "x-speed": 0,
    "y-speed": 0
  }
  var walls = {
    "leftWall":0,
    "rightWall":$("#board").width() - 50,
    "topWall":0,
    "bottomWall":$("#board").height() - 50
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp)
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker["x-speed"] = -5
    }
    else if (event.which === KEY.UP) {
      walker["y-speed"] = -5
    }
    else if (event.which === KEY.RIGHT) {
      walker["x-speed"] = 5
    }
    else if (event.which === KEY.DOWN) {
      walker["y-speed"] = 5
    }
  }
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      walker["x-speed"] = 0
    }
    else if (event.which === KEY.UP) {
      walker["y-speed"] = 0
    }
    else if (event.which === KEY.RIGHT) {
      walker["x-speed"] = 0
    }
    else if (event.which === KEY.DOWN) {
      walker["y-speed"] = 0
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    walker["x-coordinate"] += walker["x-speed"]
    walker["y-coordinate"] += walker["y-speed"]
  }

  function redrawGameItem() {
    $("#walker").css("left", walker["x-coordinate"])
    $("#walker").css("top", walker["y-coordinate"])
  }

  function wallCollision() {
    if (walls.leftWall >= walker["x-coordinate"]) {
      walker["x-coordinate"] -= walker["x-speed"]
      walker["y-coordinate"] -= walker["y-speed"]
    }
    else if (walls.rightWall <= walker["x-coordinate"]) {
      walker["x-coordinate"] -= walker["x-speed"]
      walker["y-coordinate"] -= walker["y-speed"]
    }
    else if (walls.topWall >= walker["y-coordinate"]) {
      walker["y-coordinate"] -= walker["y-speed"]
    }
    else if (walls.bottomWall <= walker["y-coordinate"]) {
      walker["y-coordinate"] -= walker["y-speed"]
    }
  }
}
