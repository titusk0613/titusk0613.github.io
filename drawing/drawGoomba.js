
function drawGoomba(x, y, frame) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
        if (frame == 1) {
            ctx.translate(2*UNIT,0);
            drawHeadGoomba1();
            drawBodyGoomba1();
        }else if (frame == 2){
            drawHeadGoomba2();
            drawBodyGoomba2();
        }else if (frame == 3){
            ctx.translate(3*UNIT,2 * UNIT);
            drawHeadGoomba3();
            drawBodyGoomba3();
        }
        ctx.restore();
    }
function drawGoomba1(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawHeadGoomba1();
    drawBodyGoomba1();
    ctx.restore();
}
function drawGoomba2(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawHeadGoomba2();
    drawBodyGoomba2();
    ctx.restore();
}
function drawGoomba3(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawHeadGoomba3();
    drawBodyGoomba3();
    ctx.restore();
}
function drawHeadGoomba1() {
    ctx.fillStyle = "#F7CABB"
    ctx.fillRect(4 * UNIT, 2 * UNIT, 8 * UNIT, 8 * UNIT);

    ctx.fillStyle = "#8F501F";
    ctx.fillRect(6 * UNIT, 0 * UNIT, 4 * UNIT, 6 * UNIT);
    ctx.fillRect(5 * UNIT, 1 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT, 1 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(4 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 5 * UNIT, 3 * UNIT, 6 * UNIT);
    ctx.fillRect(12 * UNIT, 5 * UNIT, 3 * UNIT, 6 * UNIT);
    ctx.fillRect(0 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(15 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(14 * UNIT, 6 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#000000"
    ctx.fillRect(3 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
}
function drawBodyGoomba1() {
    ctx.fillStyle = "#F7CABB"
    ctx.fillRect(5 * UNIT, 10 * UNIT, 6 * UNIT, 3 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 13 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#000000"
    ctx.fillRect(11 * UNIT, 13 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 14 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(4 * UNIT, 13 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 14 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(1 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);

    ctx.fillStyle = "#8F501F";
}
function drawHeadGoomba2() {
    ctx.fillStyle = "#F7CABB"
    ctx.fillRect(4 * UNIT, 2 * UNIT, 8 * UNIT, 8 * UNIT);

    ctx.fillStyle = "#8F501F";
    ctx.fillRect(6 * UNIT, 0 * UNIT, 4 * UNIT, 6 * UNIT);
    ctx.fillRect(5 * UNIT, 1 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT, 1 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(4 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 5 * UNIT, 3 * UNIT, 6 * UNIT);
    ctx.fillRect(12 * UNIT, 5 * UNIT, 3 * UNIT, 6 * UNIT);
    ctx.fillRect(0 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(15 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(14 * UNIT, 6 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 6 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#000000"
    ctx.fillRect(3 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 6 * UNIT, 4 * UNIT, 1 * UNIT);
}
function drawBodyGoomba2() {
    ctx.fillStyle = "#F7CABB"
    ctx.fillRect(5 * UNIT, 10 * UNIT, 6 * UNIT, 3 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
    
    ctx.fillStyle = "#000000"
    ctx.fillRect(3 * UNIT, 13 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 14 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 12 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT, 13 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 14 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);

    ctx.fillStyle = "#8F501F";
}
function drawHeadGoomba3(){
    ctx.fillStyle = "#F7CABB"
    ctx.fillRect(5 * UNIT, 11 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 12 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);


    ctx.fillStyle = "#8F501F";
    ctx.fillRect(8 * UNIT, 6 * UNIT, 4 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 7 * UNIT, 10 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(15 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 9 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(16 * UNIT, 9 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 12 * UNIT, 1 * UNIT);


    ctx.fillStyle = "#000000"
    ctx.fillRect(5 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 9 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 13 * UNIT, 5 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 13 * UNIT, 5 * UNIT, 1 * UNIT);

}
function drawBodyGoomba3(){

}



