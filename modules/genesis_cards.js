import {$, $$} from '/modules/selector.js';
import {randomBinary} from '/modules/random.js';

// Genesis Cards border animation
// check how many cards we have and store them in this unchangeable object
const cards = $('#cards').children;

// border HTML for each cell
let border_sides = function (top, right, bot, left) {
return '<div class="top">'+top+'</div><div class="right">'+right+'</div><div class="bot">'+bot+'</div><div class="left">'+left+'</div>';
};

// CSS variables needed for calculating the CSS correctly
let cardW, cardH, side_length, h_cells_nr, v_cells_nr, h_cells_rounded, v_cells_rounded;

let root_variables = function () {
side_length = '11';
//horizontal and vertical number of cells required
h_cells_nr = cardW/side_length;
v_cells_nr = cardH/side_length;


//let's floor these puppies
h_cells_rounded = Math.floor(h_cells_nr)-3;
v_cells_rounded = Math.floor(v_cells_nr)-3;

return ':root { --side-length: '+ Math.floor(side_length) + 'px;';
};

var makeCells = function(index) {

let cell = function(){
    let nr = randomBinary();
    return '<i class="">'+ nr +'</i>';
}

// cells HTML structure
let topCells = cell();
let rightCells = cell();
let botCells = cell();
let leftCells = cell();

for (let i = 0; i <= h_cells_rounded; i++) {
    topCells += cell();
}
//right
for (let i = 0; i <= v_cells_rounded; i++) {
    rightCells += cell();
}
//bot
for (let i = 0; i <= h_cells_rounded; i++) {
    botCells += cell();
}
//left
for (let i = 0; i <= v_cells_rounded; i++) {
    leftCells += cell();
}

// fresh border container for you sir
if ($('.border', cards[index]).innerHTML == '') {
    $('.border', cards[index]).innerHTML = border_sides(topCells, rightCells, botCells, leftCells);
}
}

export let cardDimensions = function() {
cardW = cards[0].clientWidth;
cardH = cards[0].clientHeight;
$('#root_variables').innerHTML = root_variables(cardW, cardH);
}

// function to add animation fade for binary numbers
let addFade = function(object) {
let hoveredCard = $$('.border i', object);

let delay = 25.5;

for (let i = 0; i < hoveredCard.length; i++) {
    delay += 25.5;
    setTimeout(() => {
    hoveredCard[i].className = "binaryFade";
    }, delay);
}
}


// run Forest! HOVER ON CARDS
$$('#cards li').forEach((element, index) => {
    element.addEventListener('mouseover', event => {
        makeCells(index);
        addFade(element);
    });
    element.addEventListener('mouseout', event => {
        element.querySelector('.border').innerHTML = '';
    });
});