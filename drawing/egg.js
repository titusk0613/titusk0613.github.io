var canvas;
var ctx;
var unit = 10;

window.onload =init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    drawRuler (10);
}
