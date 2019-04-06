function drawMario(x,y,scale) {
    ctx.save();
    ctx.translate(x*UNIT,y*UNIT,scale*UNIT);
    ctx.scale(scale,scale)
    drawHead();
    drawBody();
    ctx.restore();
}

function drawHead() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(4 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 9 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 6 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);

    ctx.fillStyle = "#6D671D"
    ctx.fillRect(3 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 7 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(1 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 7 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 8 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 14 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(1 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 2 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);


    
   
    
    function drawHead() {
        ctx.fillStyle = "#C4291C";
        ctx.fillRect(4 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
        ctx.fillRect(5 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
        ctx.fillRect(6 * UNIT, 9 * UNIT, 2 * UNIT, 4 * UNIT);
        ctx.fillRect(8 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(4 * UNIT, 11 * UNIT, 6 * UNIT, 2 * UNIT);
        ctx.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);
        ctx.fillRect(8 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);
    
        ctx.fillStyle = "#6D671D"
        ctx.fillRect(3 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
        ctx.fillRect(3 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(9 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
        ctx.fillRect(3 * UNIT, 7 * UNIT, 2 * UNIT, 3 * UNIT);
        ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(1 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 7 * UNIT, 2 * UNIT, 2 * UNIT);
        ctx.fillRect(8 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 8 * UNIT, 3 * UNIT, 2 * UNIT);
        ctx.fillRect(10 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(12 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(2 * UNIT, 14 * UNIT, 3 * UNIT, 2 * UNIT);
        ctx.fillRect(9 * UNIT, 14 * UNIT, 3 * UNIT, 2 * UNIT);
        ctx.fillRect(1 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(12 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    
        ctx.fillStyle = "#EAAD3C"
        ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(5 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(6 * UNIT, 2 * UNIT, 2 * UNIT, 5 * UNIT);
        ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(9 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
        ctx.fillRect(10 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
        ctx.fillRect(12 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(4 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
        ctx.fillRect(8 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
        ctx.fillRect(5 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(1 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
        ctx.fillRect(3 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
        ctx.fillRect(11 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
        ctx.fillRect(10 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    
    
    
    }
    
    
}

