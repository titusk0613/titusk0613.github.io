var canvas;
var ctx;
var unit = 10;

window.onload =init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillRect(4*unit,0,6*unit,unit);
    ctx.fillRect(3*unit,unit,3*unit,unit);
    ctx.fillRect(2*unit,2*unit,2*unit,unit);
    ctx.fillRect(1*unit,3*unit,2*unit,unit);
    ctx.fillRect(1*unit,4*unit,1*unit,2*unit);
    ctx.fillRect(0,4*unit,unit,7*unit);
    ctx.fillRect(1*unit,10*unit,3*unit,unit);
    ctx.fillRect(1*unit,11*unit,2*unit,1*unit);
    ctx.fillRect(2*unit,12*unit,1*unit,2*unit);
    ctx.fillRect(3*unit,13*unit,1*unit,2*unit);
    ctx.fillRect(4*unit,14*unit,9*unit,1*unit);
    ctx.fillRect(12*unit,13*unit,2*unit,1*unit);
    ctx.fillRect(13*unit,10*unit,1*unit,3*unit);
    ctx.fillRect(14*unit,10*unit,2*unit,1*unit);
    ctx.fillRect(15*unit,4*unit,1*unit,6*unit);
    ctx.fillRect(14*unit,3*unit,1*unit,3*unit);
    ctx.fillRect(13*unit,2*unit,1*unit,2*unit);
    ctx.fillRect(12*unit,1*unit,1*unit,2*unit);
    ctx.fillRect(11*unit,unit,2*unit,1*unit);
    ctx.fillRect(9*unit,0,2*unit,1*unit);
    ctx.fillRect(10*unit,1*unit,1*unit,1*unit);
    ctx.fillRect(11*unit,0,1*unit,1*unit);
    ctx.fillRect(1*unit,11*unit,2*unit,1*unit);
    ctx.fillRect(12*unit,9*unit,1*unit,2*unit);
    ctx.fillRect(3*unit,9*unit,1*unit,2*unit);
    ctx.fillRect(4*unit,9*unit,8*unit,1*unit);
    ctx.fillRect(6*unit,10*unit,1*unit,2*unit);
    ctx.fillRect(9*unit,10*unit,1*unit,2*unit);
    ctx.fillStyle = "#75FA4C";
    ctx.fillRect(1*unit,8*unit,2*unit,2*unit);
    ctx.fillRect(3*unit,7*unit,2*unit,2*unit);
    ctx.fillRect(4*unit,5*unit,1*unit,2*unit);
    ctx.fillRect(4*unit,4*unit,2*unit,2*unit);
    ctx.fillRect(3*unit,3*unit,1*unit,2*unit);
    ctx.fillRect(6*unit,4*unit,4*unit,2*unit);
    ctx.fillRect(7*unit,2*unit,2*unit,2*unit);
    ctx.fillRect(13*unit,8*unit,2*unit,2*unit);
    ctx.fillRect(11*unit,7*unit,2*unit,2*unit);
    ctx.fillRect(11*unit,5*unit,1*unit,2*unit);
    ctx.fillRect(10*unit,4*unit,2*unit,2*unit);
    ctx.fillRect(12*unit,3*unit,1*unit,2*unit);
    
    drawRuler(10); 
}
 