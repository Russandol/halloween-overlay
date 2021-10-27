setTimeout(houseAnimation, random(6000, 2000));

function houseAnimation(){
    let inactiveHouses = $('.houses img').not('.active');
    let activeHouse = $('.houses img.active');

    $(inactiveHouses[random(inactiveHouses.length -1)]).addClass('active');
    $(activeHouse).removeClass('active');

    setTimeout(houseAnimation, random(6000, 2000));
}


function random(max, min = null) {
    if (min !== null) {
        return Math.random() * (max - min) + min;
    }

    return Math.floor(Math.random() * max);
}