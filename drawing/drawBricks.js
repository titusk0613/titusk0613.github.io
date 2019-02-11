function drawBricks(){
    // For loop
    for (var i = 0; i<5; i++){
    // In the first loop, i equals 0.
    //In the second loop, i equals 1.
    // and so on...
    ctx.save();
    ctx.translate(i*width,0);
    }
}
function drawBrick(){
    //brown
    ctx.fillStyle = "#48372F";
    ctx.fillRect(0 * UNIT, 0 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 1 * UNIT, 8 * UNIT, 9 * UNIT);
    ctx.fillRect(0 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 0 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 0 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 1 * UNIT, 4 * UNIT, 3 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 0 * UNIT, 15 * UNIT, 15 * UNIT);

    //light brown
    ctx.fillStyle ="#DEC79D";
    ctx.fillRect(0 * UNIT, 1 * UNIT, 1 * UNIT, 9 * UNIT);
    ctx.fillRect(1 * UNIT, 0 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 12 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(15 * UNIT, 1 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(11 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 6 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT, 1 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(11 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);


    ctx.fillStyle ="black";
    ctx.fillRect(0 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 15 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 15 * UNIT, 7 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 6 * UNIT, 1 * UNIT, 9 * UNIT);
    ctx.fillRect(9 * UNIT,0 * UNIT, 1 * UNIT, 10 * UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 12 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);

}