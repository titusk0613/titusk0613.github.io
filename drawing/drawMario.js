function drawMario(x, y, frame) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    if (frame == 1) {
        ctx.translate(2*UNIT,0);
        drawHeadMario1();
        drawBodyMario1();
    }else if (frame == 2){
        drawHeadMario2();
        drawBodyMario2();
    }else if (frame == 3){
        ctx.translate(3*UNIT,0);
        drawHeadMario3();
        drawBodyMario3();
    }else if (frame == 4){
        ctx.translate(-1*UNIT,1*UNIT);
        drawHeadMario3();
        drawBodyMario4();
    }
    ctx.restore();
}
function drawMario1(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawHeadMario1();
    drawBodyMario1();
    ctx.restore();
}
function drawMario2(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawHeadMario2();
    drawBodyMario2();
    ctx.restore();
}
function drawMario3(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawHeadMario3();
    drawBodyMario3();
    ctx.restore();
}
function drawMario4(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT);
    drawHeadMario3();
    drawBodyMario3();
    ctx.restore();
}

function drawHeadMario1() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(3 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6D671D"
    ctx.fillRect(2 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(4 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 2 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(7 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);

}
function drawBodyMario1() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(4 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(7 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 6 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#6D671D"
    ctx.fillRect(1 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 7 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 14 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(0 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 7 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
}
function drawHeadMario2() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(4 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6D671D"
    ctx.fillRect(3 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(5 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 2 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(8 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
}
function drawBodyMario2() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(6 * UNIT, 7 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 7 * UNIT, 3 * UNIT);
    ctx.fillRect(11 * UNIT, 11 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(9 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#6D671D";
    ctx.fillRect(2 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 8 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(12 * UNIT, 11 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(13 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 13 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#EAAD3C";
    ctx.fillRect(0 * UNIT, 8 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 8 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
}
function drawHeadMario3() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(2 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6D671D"
    ctx.fillRect(1 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(1 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(3 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 2 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(6 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(2 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
}
function drawBodyMario3() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(3 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 9 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#6D671D"
    ctx.fillRect(1 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(0 * UNIT, 8 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(1 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 14 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 13 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(3 * UNIT, 11 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(5 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
}
function drawHeadMario4() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(6 * UNIT, 0 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 1 * UNIT, 8 * UNIT, 1 * UNIT);
    ctx.fillStyle = "#6D671D"
    ctx.fillRect(5 * UNIT, 2 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(5 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7* UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10* UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(11* UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11* UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(10 * UNIT, 5 * UNIT, 4 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(7 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8* UNIT, 2 * UNIT, 2 * UNIT, 5 * UNIT);
    ctx.fillRect(10* UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11* UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 3 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(14 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 5 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 6 * UNIT, 3 * UNIT, 1 * UNIT);
}

function drawBodyMario4() {
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(9 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT, 9 * UNIT, 1 * UNIT, 4 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 10 * UNIT, 6 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT, 12 * UNIT, 3 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#6D671D"
    ctx.fillRect(5 * UNIT, 7 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(6 * UNIT, 8 * UNIT, 5 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT, 13 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(9 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);


    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(11 * UNIT, 8 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(12 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(13 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(3 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);





}

