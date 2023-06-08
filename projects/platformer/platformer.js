$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(350, 630, 50, 110);
createPlatform(250, 630, 100, 50);
createPlatform(0, 500, 55, 50);
createPlatform(350, 500, 110, 40);
createPlatform(500, 450, 110, 40);
createPlatform(1300, 100, 100, 50);
createPlatform(650, 350, 40, 40);
createPlatform(800, 300, 40, 40);
createPlatform(1000, 250, 40, 40);
createPlatform(1100, 280, 100, 40);
createPlatform(1200, 200, 30, 30);
createPlatform(1100,300, 50, 300);
createPlatform(1100, 600, 300, 50);


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

createCollectable("database", 0, 450);
createCollectable("database", 1340, 50);
createCollectable("database", 800, 250);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon("right", 740, 1000);
createCannon("top", 80, 2000);
createCannon("bottom", 720, 825);
createCannon("bottom", 820, 576);
createCannon("bottom", 1015, 700);
createCannon("top", 1145, 700);
createCannon("right", 180, 1000)



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
