// Variable
// var x = 0;
// x = 1;

// Constant
// const y = 0;
// y = 1;

var canvas;
var ctx;
var unit = 10;

window.onload =init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // Filling a rectangle
    ctx.fillRect(0,0,100,100);
    // Changing color of fill
    ctx.fillStyle = "purple";
    ctx.fillRect(0,0,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(900,0,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(0,900,100,100);
    ctx.fillStyle = "purple";
    ctx.fillRect(900,900,100,100);
    ctx.fillStyle = "skyblue";
    ctx.fillRect(450,450,100,100);
    ctx.fillStyle = "pink";
    ctx.fillRect(0,450,100,100);
    ctx.fillStyle = "pink";
    ctx.fillRect(450,0,100,100);
    ctx.fillStyle = "pink";
    ctx.fillRect(900,450,100,100);
    ctx.fillStyle = "pink";
    ctx.fillRect(450,900,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(100,0,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0,100,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(800,0,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0,800,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(900,100,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(100,900,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(900,800,100,100);
    ctx.fillStyle = "yellow";
    ctx.fillRect(800,900,100,100);
    ctx.fillStyle = "black";
    ctx.fillRect(100,100,100,100);
    ctx.fillStyle = "black";
    ctx.fillRect(800,800,100,100);
    ctx.fillStyle = "black";
    ctx.fillRect(800,100,100,100);
    ctx.fillStyle = "black";
    ctx.fillRect(100,800,100,100);
}