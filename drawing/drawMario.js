function drawMario1(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT,);
    drawHead1();
    drawBody1();
    ctx.restore();
}
function drawMario2(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT,);
    drawHead2();
    drawBody2();
    ctx.restore();
}
function drawMario3(x, y) {
    ctx.save();
    ctx.translate(x * UNIT, y * UNIT,);
    drawHead3();
    drawBody3();
    ctx.restore();
}
function drawHead1() {
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
function drawBody1(){
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(5 * UNIT, 7 * UNIT, 1 * UNIT, 3 * UNIT);
    ctx.fillRect(6 * UNIT, 9 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(8 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 11 * UNIT, 6 * UNIT, 2 * UNIT);
    ctx.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(9 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(8 * UNIT, 12 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillStyle = "#6D671D"
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
    ctx.fillRect(3 * UNIT, 7 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(5 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(1 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(11 * UNIT, 10 * UNIT, 2 * UNIT, 3 * UNIT);
    ctx.fillRect(10 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
}
function drawHead2(){
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
function drawBody2(){
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
function drawHead3(){
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
function drawBody3(){
    ctx.fillStyle = "#C4291C";
    ctx.fillRect(5 * UNIT,7 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT,8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT,9 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT,10 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT,9 * UNIT, 2 * UNIT, 4 * UNIT);
    ctx.fillRect(10 * UNIT,10 * UNIT, 1 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT,12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT,13 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(3 * UNIT,12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT,11 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#6D671D"
    ctx.fillRect(3 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(2 * UNIT, 8 * UNIT, 3 * UNIT, 3 * UNIT);
    ctx.fillRect(3 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT,8 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(5 * UNIT,10 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT,12 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(6 * UNIT,7 * UNIT, 3 * UNIT, 1 * UNIT);
    ctx.fillRect(8 * UNIT,8 * UNIT, 2 * UNIT, 1 * UNIT);
    ctx.fillRect(4 * UNIT,14 * UNIT, 4 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT,13 * UNIT, 3 * UNIT, 2 * UNIT);
    ctx.fillRect(10 * UNIT,14 * UNIT, 1 * UNIT, 1 * UNIT);

    ctx.fillStyle = "#EAAD3C"
    ctx.fillRect(5 * UNIT,11 * UNIT, 2 * UNIT, 2 * UNIT);
    ctx.fillRect(7 * UNIT,11 * UNIT, 1 * UNIT, 1 * UNIT);
    ctx.fillRect(7 * UNIT, 9* UNIT, 1 * UNIT, 1 * UNIT);
}

    