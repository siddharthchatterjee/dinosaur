const SIZEX = 2000;
const SIZEY = 1000;

var canvas =
  document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//let imageData = ctx.createImageData(SIZEX, SIZEY);

//console.log(imageData);

//for (i = 0; i < 20; i++)
setInterval(draw, 1000/3);


function draw () {
  let count = 0;
  //for (k = 0; k < 100; k++)
  {
    clear();
    for (i = 0; i < 10; i++) {
      count++;
      let x = Math.round(Math.random() * SIZEX);
      let y = Math.round(Math.random() * SIZEY);

      console.log('count=' + count + ', x=' + x + ', y=' + y);
      ctx.fillRect(x, y, 10, 10);
    }
    //pause ();
  }
}
function clear(){
  ctx.fillStyle="white";
  ctx.fillRect(0,0,SIZEX,SIZEY);
  ctx.fillStyle="black";
}

async function pause ()
{
  await sleep (1000);
}
