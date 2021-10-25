let container = $('.container');
let bat = $('.bat');
let maxX = container.width() - bat.width();
let maxY = container.height() - bat.height();

let positionY = randomNbr(0, maxY);
bat.css('top', positionY + 'px');


let id = null;

myMove();
function myMove() {
    let elem = $('.bat');
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);

    function frame() {
        if (pos == maxX) {
            clearInterval(id);
        } else {
            pos++;
            elem.css('top', pos + 'px');
            elem.css('left', pos + 'px');
        }
    }
}


function randomNbr(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}


/*
// Original JavaScript code by Chirp Internet: chirpinternet.eu
let container = $('.container');
let bat = $('.bat');

let maxX = container.width() - bat.width();
let maxY = container.height() - bat.height();

let duration = 5;
let gridSize = 50;
let start = null;

function step(timestamp) {
    if(start === null) {
        start = timestamp;
    }

    let progress = (timestamp - start) / duration / 1000;
    let x = progress * maxX/gridSize;
    let y = 2 * Math.sin(x);

    bat.css('left', Math.min(maxX, gridSize * x) + "px");
    bat.css('bottom', maxY/2 + (gridSize * y) + "px");

    if (progress >= 1) {
        start = null;
        return;
    }

    requestAnimationFrame(step);
}

setTimeout(function(){
    requestAnimationFrame(step);
}, randomNbr(6000, 8000));
*/


