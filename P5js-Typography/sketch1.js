let pg;
let font;
function setup(){
    font=loadFont("B612Mono-Regular.ttf");
    textSize(200);
    createCanvas(1080, 100, P2D);
    //canvas.center();
    pg=createGraphics(1000, 100, P2D);
}

function draw(){
    background(0);
    // beginDraw() and endDraw() is not supportet in p5.js, and or often not needed;
    pg.background(0);
    pg.fill(255);
    pg.textFont(font);
    pg.textSize(100);
    pg.push();
    pg.translate(width / 2, height / 2 - 10);
    pg.textAlign(CENTER, CENTER);
    pg.text("Lautaro Veron", 0, 0);
    pg.pop();
    // beginDraw() and endDraw() is not supportet in p5.js, and or often not needed;
    let tilesX = 10;
    let tilesY = 10;
    let tileW = int(width / tilesX);
    let tileH = int(height / tilesY);
    for(let y = 0;y < tilesY;y++) {
        for(let x = 0;x < tilesX;x++) {
            let wave = int(sin((frameCount + (x * y)) * 0.07) * 20);
            let sx = x * tileW + wave;
            let sy = y * tileH;
            let sw = tileW;
            let sh = tileH;
            let dx = x * tileW;
            let dy = y * tileH;
            let dw = tileW;
            let dh = tileH;
            copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }
}

