const SIZEX = 200
const SIZEY = 100
const STARTINGVELOVITY = 200
var heartBeat = 0
var game = init()
var count = 0
var dinoWorld = initDino()
var interval = 1000 / 10
var up = false
var down = false
var height = 0
var difT = 0
var tNum = 0
var dinoSizeY = 100
var dinoSizeX = 50

// location of the dinosaur
var dino_x = 50
var dino_y = 48 * 10

window.addEventListener(
  'keydown',
  function (event) {
    switch (event.keyCode) {
      case 38:
        dino_up()
        break

      case 32:
        dino_up()
        break

      case 40:
        dino_down()
        break
    }
  },
  false
)

function init () {
  let game = new Array(SIZEX)
  for (var i = 0; i < SIZEX; i++) {
    game[i] = new Array(SIZEY)
    for (let y = 0; y < SIZEY; y++) {
      game[i][y] = 0
      ;``
    }
  }

  game[100][10] = 1

  console.log('init done')
  return game
}

function initDino () {
  let game = new Array(200)
  for (var i = 0; i < SIZEX; i++) {
    game[i] = new Array(SIZEY)
    for (let y = 0; y < SIZEY; y++) {
      game[i][y] = 0
    }
  }

  game[100][50] = 1

  return game
}

var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

var imageData = ctx.createImageData(SIZEX, SIZEY)

// console.log(imageData);HY

var intervalVar = setInterval(player, interval)
// setInterval(cacti, 10000000);
cacti(10)

function player () {
  play()
}

function play () {
  console.log('play() called')
  moveRoad()
  drawGame()
  createRoad()
  // dinosaur part

  if (up == true) {
    dino_y -= differenceFinder(tNum)
    tNum++
  }
  if (down == true) {
    dino_y += differenceFinder(tNum)
    tNum++
  }

  if (dino_y >= 490) {
    up = false
    down = false
  }

  if (dino_y <= 300) {
    down = true
    up = false
    tNum = 0
  }
  // displayDino(height)
  displayDinosaur()
  collision(dino_y, dino_x)
  // cactus
  heartBeat++
  if (heartBeat >= Math.random() * 500 && heartBeat >= 200) {
        
    if (heartBeat >= 1000) {
      bigcacti()
      heartBeat = -25
    } else {
      cacti()
      heartBeat = 0
    }
  }
  // speed up
  count++
  if (count >= 50) {
    count = 0
    interval -= 1

    clearInterval(intervalVar)
    intervalVar = setInterval(play, interval)

    console.log('sped up to interval=' + interval)
  }
}

function cacti () {
  makeCactus(100)
}
function bigcacti () {
  makeCactusBig(100)
}

function test () {
  let count = 0
  for (k = 0; k < 100; k++) {
    clear()
    for (i = 0; i < 10; i++) {
      count++
      let x = Math.round(Math.random() * SIZEX)
      let y = Math.round(Math.random() * SIZEY)

      console.log('count=' + count + ', x=' + x + ', y=' + y)
      ctx.fillRect(x, y, 10, 10)
    }
    //  sleep ();
  }
}

async function pause () {
  await sleep(1)
}

function createRoad () {
  var pixel = 0
  var height = SIZEY / 2
  while (pixel < SIZEX) {
    game[pixel][height] = 1
    pixel++
  }
}

function clear () {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, SIZEX * 10, SIZEY * 10)
  ctx.fillStyle = 'black'
}

function moveRoad () {
  // console.log("moveRoad() called");

  // for(let y = 0; y < SIZEY; y++){
  // game[0][y] == 0;
  // }

  // move everything in column x to x-1
  for (let x = 1; x < SIZEX; x++) {
    for (let y = 0; y < SIZEY; y++) {
      game[x - 1][y] = game[x][y]
    }
  }

  //  clears the last column
  for (let y = 0; y < SIZEY; y++) {
    game[SIZEX - 1][y] = 0
  }
}

function drawGame () {
  // console.log('drawGame() called');
  for (let i = 0; i < SIZEX; i++) {
    for (let v = 0; v < SIZEY; v++) {
      if (game[i][v] == 1) {
        ctx.fillStyle = 'black'
        ctx.fillRect(i * 10, v * 10, 10, 10)
        if (v != 50) console.log('game[i='+ i + '][v=' + v + ']')
      } else if (game[i][v] == 0) {
        ctx.fillStyle = 'white'
        ctx.fillRect(i * 10, v * 10, 10, 10)
      }
    }
  }
}

function makeCactus (xCoordinate) {
  console.log('makeCactus() called')

  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 11; y++) {
      game[xCoordinate + x][SIZEY / 2 - y] = 1
    }
  }
  for (let x = 0; x < 3; x++) {
    game[xCoordinate - x][SIZEY / 2 - 4] = 1
    game[xCoordinate + x + 1][SIZEY / 2 - 5] = 1
  }
}
function makeCactusBig (xCoordinate) {
  console.log('makeCactusBig() called')
  // first cactus
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 11; y++) {
      game[xCoordinate + x][SIZEY / 2 - y] = 1
    }
  }
  for (let x = 0; x < 3; x++) {
    game[xCoordinate - x][SIZEY / 2 - 4] = 1
    game[xCoordinate + x + 1][SIZEY / 2 - 5] = 1
  }
  // second cactus(weird arms)
  xCoordinate += 8
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 11; y++) {
      game[xCoordinate + x + 6][SIZEY / 2 - y] = 1
    }
  }
  for (let x = 0; x < 3; x++) {
    game[xCoordinate - x][SIZEY / 2 - 4] = 1
    game[xCoordinate + x + 1][SIZEY / 2 - 9] = 1
  }
  // third cactus small
  xCoordinate += 8
  for (let x = 0; x < 1; x++) {
    for (let y = 0; y < 6; y++) {
      game[xCoordinate + x + 6][SIZEY / 2 - y] = 1
    }
  }
  for (let x = 0; x < 2; x++) {
    game[xCoordinate - x][SIZEY / 2 - 2] = 1
    game[xCoordinate + x + 1][SIZEY / 2 - 3] = 1
  }
  // fourth cactus biggest
  xCoordinate += 10
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 13; y++) {
      game[xCoordinate + x][SIZEY / 2 - y] = 1
    }
  }
  for (let x = 0; x < 3; x++) {
    game[xCoordinate - x][SIZEY / 2 - 4] = 1
    game[xCoordinate + x + 1][SIZEY / 2 - 7] = 1
  }
}


/**
 * draws the dinosaur 
 *
 */
function displayDinosaur () {
  console.log('displayWorld() called')

  /*
  for (let i = 0; i < SIZEX; i++) {
    for (let v = 0; v < SIZEY; v++) {
      if (dinoWorld[i][v] == 1) {

        ctx.fillStyle = "black";
        ctx.fillRect(i * 10, v * 10, 10, 10)
      }
      else if (dinoWorld[i][v] == 0) {
        ctx.fillStyle = "white";
        ctx.fillRect(i * 10, v * 10, 10, 10);
      }

    }
  }
  */

  ctx.fillStyle = 'red'
  ctx.fillRect(dino_x, dino_y - dinoSizeY, dinoSizeX, dinoSizeY)
}

function dino_up () {
  console.log('dino_up(): called')
  up = true
  tNum = 1
}
function dino_down () {}
/**
 * finds the differnce in heights and how much higher the dino should move
 * @param {} t
 */
function differenceFinder (t) {
  let height2 = STARTINGVELOVITY * t + -9.8 * (t * t) / 2
  let height1 = STARTINGVELOVITY * (t - 1) + -9.8 * ((t - 1) * (t - 1)) / 2
  return height2 - height1
}
function collision (yVal, xVal) {
  let scaleY = Math.round(yVal / 10.0);
  let scaleX = Math.round(xVal / 10.0);
  let hit = false;
  for (let x = scaleX; x < scaleX + dinoSizeX; x++) {
    for (let y = scaleY; y < scaleY - dinoSizeY; y--) {
      if (game[x][y] == 1) {
        hit = true;
      }
    }
  }

  console.log('collision(): hit=' + hit);
  return hit
  
}
