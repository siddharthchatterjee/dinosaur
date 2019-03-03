//import { getDinoBitmapValue } from './bitmap.js';
//import './bitmap.js'

const SIZEX = 200
const SIZEY = 100
const STARTINGVELOVITY = 190;
var heartBeat = 0

var count = 0
var dinoWorld = initDino()
var interval = 1000 / 20;
var up = false
var down = false
var height = 0
var difT = 0
var tNum = 0
var tNum2 = 0;
var dinoSizeY = 100
var dinoSizeX = 50
var stance = 0;
var dead = false;
var score = 0;
var shown = false;
var even = true;


// location of the dinosaur
const FLOOR = 48 * 10;
var dino_x = 50;
var dino_y = FLOOR;

var dino1 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0];

const dino2 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


const dino3 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0];
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

      // left arrow
      case 37:
        slow_down ();
        break;

        // right arrow
      case 39:
        speed_up ();
        break;
    }
  },
  false
)

var game = init();


function init() {
  let game = new Array(SIZEX);

  let v = 0;

  for (var i = 0; i < SIZEX; i++) {
    game[i] = new Array(SIZEY)

    v = 0;

    for (let y = 0; y < SIZEY; y++) {
      game[i][y] = v;
    }
  }

  //game[100][10] = 1

  let bitValue = getDinoBitmapValue(0, 2, 1);
  console.log('bitValue = ' + bitValue);

  console.log('init done')
  return game
}

function initDino() {
  let game = new Array(200)
  for (var i = 0; i < SIZEX; i++) {
    game[i] = new Array(SIZEY)
    for (let y = 0; y < SIZEY; y++) {
      game[i][y] = 0
    }
  }

  // draw road
  game[100][50] = 1;



  return game
}

var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')

var imageData = ctx.createImageData(SIZEX, SIZEY)

// console.log(imageData);HY

var intervalVar = setInterval(player, interval)
// setInterval(cacti, 10000000);
cacti(10)

function player() {
  play()
}

function play() {
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop("0","black");
  gradient.addColorStop("1.0", "grey"	);
  // make it even or odd
  even = !even;

  if(dead == false){
  console.log('play() called')
  moveRoad()
  drawGame()
  createRoad()
  // dinosaur part
  ctx.font = "15px Georgia";
ctx.fillStyle = gradient;
  ctx.fillText("Score: " + score, 900, 150);
    // move dino up/down half as slowly as everything else
    if (even) {

      if (up == true) {
        dino_y -= differenceFinder(tNum, tNum2) / 2.5;
        tNum++
        tNum2++
      }
      else if (down == true) {

        dino_y += differenceFinder(tNum, tNum2) / 2.5;
        tNum++
        tNum2++;
      }
    }
  if (dino_y >= FLOOR+10) {
    dino_y = FLOOR;
    up = false;
    down = false;
    tNum = 0;
    tNum2 = -1;
  }

/*
  if (dino_y > SIZEY / 2) {
    down = false;
    up = false;
    tNum = 0;
    tNum2 = -1;
  }
  */
  if (dino_y <= 100) {
    down = true;
    up = false;
    tNum = 0;
    tNum2 = -1;
  }
  //console.log("dino_y = " + dino_y);
  /*if(dino_y/10 <= SIZEY/2){
        down = false;
        

  }*/
  // displayDino(height)
  drawDino(stance);
  stance++;
  if(stance == 3){
    stance = 0;
  }
  collision(dino_y, dino_x)

  // cactus
  heartBeat++
  if (heartBeat >= Math.random() * 200 && heartBeat >= 30) {
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
  tNum2 = tNum+1;
  
}
else if(dead == true && shown == false){
  /*
  clear();
  document.write("You lose, Your Score is: ");
  document.write(score);
  document.clear()

  shown = true;
  dead = false;
  */
  playDead ();

}
}

function playDead ()
{
  // stop playing game
  clearInterval(intervalVar);
  
}

function cacti() {
  makeCactus(100);
  score ++;
}

function bigcacti() {
  makeCactusBig(100)
}

function test() {
  let count = 0
  for (k = 0; k < 100; k++) {
    clear()
    for (i = 0; i < 10; i++) {
      count++
      let x = Math.round(Math.random() * SIZEX)
      let y = Math.round(Math.random() * SIZEY)

      //console.log('count=' + count + ', x=' + x + ', y=' + y)
      ctx.fillRect(x, y, 10, 10)
    }
    //  sleep ();
  }
}

async function pause() {
  await sleep(1)
}

function createRoad() {
  var pixel = 0;
  var height = SIZEY / 2;
  while (pixel < SIZEX) {
    game[pixel][height] = 1;

    /*
    // create some gravel below
    if (pixel % 3 == 0 || pixel % 4 == 0 || pixel % 5 == 0)
    {
      game[pixel][height+2] = 1;
    }
    */

    pixel++;
  }
}

function clear() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, SIZEX * 10, SIZEY * 10)
  ctx.fillStyle = 'black'
}

function moveRoad() {
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

function drawGame() {
  // console.log('drawGame() called');
  for (let i = 0; i < SIZEX; i++) {
    for (let v = 0; v < SIZEY; v++) {
      if (game[i][v] == 1
     //  || isEdge (i, v)
      ) {
        drawPixel (i, v, 'black');
        //if (v != 50) console.log('game[i=' + i + '][v=' + v + ']')
      } else if (game[i][v] == 0) {
        drawPixel (i, v, 'white');
      }
    }
  }
}

/**
 * Given a array location, scale it and draw it on the canvas
 * @param x
 * @param y
 * @param color
 */
function drawPixel (x, y, color)
{
  ctx.fillStyle = color;
  ctx.fillRect(x * 10, y * 10, 10, 10);
}

function isEdge (x, y)
{
  // paint the edge of game black
  if (x == 0 || x == SIZEX - 1 || y == 0 || y == SIZEY-1) return true;

  return false;
}

function makeCactus(xCoordinate) {
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

function makeCactusBig(xCoordinate) {
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



function dino_up() {
  
  console.log('dino_up(): called')
  if(up != true && down != true){
  up = true
  tNum = 1
  } 
}
 
function dino_down() {
}

function speed_up ()
{
  interval -= 10;
  }

function slow_down ()
{
  interval += 10;
}

/**
 * finds the differnce in heights and how much higher the dino should move
 * @param {} 
 */
function differenceFinder(t, t0) {
  let height2 = STARTINGVELOVITY * t + -0.0009 * (t * t) / 1
  let height1 = STARTINGVELOVITY * (t-1) + -0.0009 * ((t-1) * (t-1)) / 1
  return (height2 - height1)
}

function collision(yVal, xVal) {
  let scaleY = Math.round(yVal / 10.0)
  let scaleX = Math.round(xVal / 10.0)
  let hit = false
  for (let x = scaleX; x < scaleX + dinoSizeX / 10; x++) {
    for (let y = scaleY; y > scaleY - dinoSizeY / 10; y--) {
      if (game[x][y] == 1) {
        hit = true;
        dead = true;

        // draw the location that hit
        drawPixel(x, y, 'red');
      }
    }
  }

  console.log('collision(): hit=' + hit)
  return hit
}

function drawDino(cycle) {
//goes through every single value in the step
  for (var x = 0; x < 18; x++) {
    for (var y = 0; y < 25; y++) {
      // checks if that value is filled in
      if (getDinoBitmapValue(cycle, x, y) == 1) {
        //console.log("drawDino() - got 1 at x=" + x + ", y=" + y);
        ctx.fillStyle = 'red';
        ctx.fillRect(x * 4, y *4+60+ SIZEY + dino_y / 2, 4, 4)
      }

    }
  }
}


/**
 * Return whether the dinosaur has a 0 or 1 at this x, y location for the given counter (0, 1, 2)
 * @param {*} cycleCounter value between 0 and 2
 * @param {*} x
 * @param {*} y
 */
function getDinoBitmapValue(cycleCounter, x, y) {
// get the right variable based on the counter
  let dino = (cycleCounter == 0) ? dino1 : ((cycleCounter == 1) ? dino2 : dino3);

  let index = y * 19 + x;
  return dino[index];
}




