function drawGrounds(x,y,length) {
     // For loop: When you have repetition in your code,
    //you want to finish with just one instance of repetition.
    const GROUND_WIDTH = 16*UNIT;
    for (var i = 0; i<length; i++){
        ctx.save();
        ctx.translate(x*UNIT,y*UNIT);
        ctx.translate(i*GROUND_WIDTH,0);
        drawGround(5,5);
        ctx.restore();
    // In the first loop, i equals 0.
    //In the second loop, i equals 1.
    // and so on...

}
    }
function drawGround(){
    ctx.fillStyle ="black"
    ctx.fillRect(0 * UNIT, 0 * UNIT, 16 * UNIT, 16 * UNIT);

    ctx.fillStyle = "#B75C2E";
    ctx.fillRect(0 * UNIT, 0 * UNIT, 7 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 0 * UNIT, 6 * UNIT, 3 * UNIT);
    ctx.fillRect(0 * UNIT, 4 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 4 * UNIT, 6 * UNIT, 3 * UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 7 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 8 * UNIT, 6 * UNIT, 3 * UNIT);
    ctx.fillRect(0 * UNIT, 12 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 12 * UNIT, 6 * UNIT, 3 * UNIT);
    ctx.fillRect(13 * UNIT, 12 * UNIT, 3 * UNIT, 3 * UNIT);

}