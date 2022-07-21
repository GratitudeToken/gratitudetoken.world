// store start and end time for time score
var puzzleStartTime, puzzleEndTime, timeScore;

// Initiate CSS Grid animation tool
const grid = document.querySelector(".grid");
const { forceGridAnimation } = animateCSSGrid.wrapGrid(grid);

// Get all the tiles and the empty tile
const tiles = Array.from(document.querySelectorAll(".tile"));
const emptyTile = document.querySelector(".tile--empty");

// Get congratulations heading
const heading = document.querySelector(".heading");

// A key / value store of what areas to "unlock"
const areaKeys = {
A: ["B", "D"],
B: ["A", "C", "E"],
C: ["B", "F"],
D: ["A", "E", "G"],
E: ["B", "D", "F", "H"],
F: ["C", "E", "I"],
G: ["D", "H"],
H: ["E", "G", "I"],
I: ["F", "H"]
};

// Add click listener to all tiles
tiles.map(tile => {
tile.addEventListener("click", event => {
    // Grab the grid area set on the clicked tile and empty tile
    const tileArea = tile.style.getPropertyValue("--area");
    const emptyTileArea = emptyTile.style.getPropertyValue("--area");

    // Swap the empty tile with the clicked tile
    emptyTile.style.setProperty("--area", tileArea);
    tile.style.setProperty("--area", emptyTileArea);

    // Animate the tiles
    forceGridAnimation();

    // Unlock and lock tiles
    unlockTiles(tileArea);
});
});

// Unlock or lock tiles based on empty tile position
const unlockTiles = currentTileArea => {

// Cycle through all the tiles and check which should be disabled and enabled
tiles.map(tile => {
    const tileArea = tile.style.getPropertyValue("--area");

    // Check if that areaKey has the tiles area in it's values
    // .trim() is needed because the animation lib formats the styles attribute
    if (areaKeys[currentTileArea.trim()].includes(tileArea.trim())) {
        tile.disabled = false;
    } else {
        tile.disabled = true;
    }
});

// Check if the tiles are in the right order
isComplete(tiles);
};


const isComplete = tiles => {

// Get all the current tile area values
const currentTilesString = tiles
    .map(tile => tile.style.getPropertyValue("--area").trim())
    .toString();

// Compare the current tiles with the areaKeys keys
if (currentTilesString == Object.keys(areaKeys).toString()) {
    puzzleEndTime = new Date().getTime();
    timeScore = (Math.abs((puzzleStartTime - puzzleEndTime) / 1000)).toFixed(2);
    codeJSON.score = parseFloat(timeScore);
    postJSON = JSON.stringify(codeJSON);
    backendCall('code');
    puzzle.style = 'display: none !important';
    $('body').style = 'overflow: hidden';
}
};


// Inversion calculator
const inversionCount = array => {

// Using the reduce function to run through all items in the array
// Each item in the array is checked against everything before it
// This will return a new array with each intance of an item appearing before it's original predecessor
return array.reduce((accumulator, current, index, array) => {
    return array
        .slice(index)
        .filter(item => {
            return item < current;
        })
        .map(item => {
            return [current, item];
        })
        .concat(accumulator);
}, []).length;
};


// Randomise tiles
const shuffledKeys = keys => Object.keys(keys).sort(() => .5 - Math.random());

setTimeout(() => {

// Begin with our in order area keys
let startingAreas = Object.keys(areaKeys);
    
// Use the inversion function to check if the keys will be solveable or not shuffled
// Shuffle the keys until they are solvable
while (inversionCount(startingAreas) % 2 == 1 || inversionCount(startingAreas) == 0) {
    startingAreas = shuffledKeys(areaKeys);
}	

// Apply shuffled areas
tiles.map((tile, index) => {
    tile.style.setProperty("--area", startingAreas[index]);
});

// Initial shuffle animation
forceGridAnimation();

// Unlock and lock tiles
unlockTiles(emptyTile.style.getPropertyValue("--area"));
}, 2000);


// Get a single first matching element
var $ = function (selector, parent) {
    return (parent ? parent : document).querySelector(selector);
};
// Get all matching elements
var $$ = function (selector, parent) {
    return (parent ? parent : document).querySelectorAll(selector);
};

function sortByValue(jsObj){
    var sortedArray = [];
    for(var i in jsObj)
    {
        // Push each JSON Object entry in array by [value, key]
        sortedArray.push([jsObj[i], i]);
    }
    return sortedArray.sort();
}

const awareness = $('.awareness');
const questions = $('.questions');
const code = $('.code');
const puzzle = $('.puzzle');
let usr = $('#username');
let git = $('#git-username');

$('.choose').addEventListener("change", function(){
    //document.querySelector('.stargate').style = 'animation: fadeOut 0.6s ease forwards;';
    const choice = $('input[name="role"]:checked').id;

    if (choice == 'awareness') {
        awareness.style = 'display: block !important';
        code.style =  'display: none !important';
    }
    if (choice == 'code') {
        awareness.style = 'display: none !important';
        code.style =  'display: block !important';
    }
});

/* Production */ const url = 'https://gratitudetoken.world:3333';
/* Local */ //const url = 'http://127.0.0.1:3333';
const choices = $('.choices');
let message = $('#message');
let username;

let awarenessJSON = new Object();
let codeJSON = new Object();
let timeJSON = new Object();

let postJSON;

awareness.addEventListener("submit", function(event){
    event.preventDefault();
    $('h1').style = 'margin-top: 88px';

    username = usr.value; awarenessJSON.username = username; postJSON = JSON.stringify(awarenessJSON);
    backendCall('awareness');
});

questions.addEventListener("submit", function(event){
    event.preventDefault();
    awarenessJSON.contact = $('#user-contact').value;
    awarenessJSON.question1 = $('#question1').value;
    awarenessJSON.question2 = $('#question2').value;
    postJSON = JSON.stringify(awarenessJSON);
    backendCall('awareness');
});

code.addEventListener("submit", function(event){
    event.preventDefault();
    username = git.value; codeJSON.gitUsername = username; postJSON = JSON.stringify(codeJSON);
    backendCall('code');
});

var backendCall = function(type) {
    fetch(url,
    {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: postJSON
    }).then(response => {
        return response.json();
    }).then(data => {
        if (data.status == '200') {
            UIActions(type, '', data.status);
        }
        if (data.status == '404') {
            UIActions(type, puzzleJSON.error2, data.status);
        }
        if (data.status == 'exists') {
            UIActions(type, puzzleJSON.error1, data.status);
        }
        if (data.status == 'user-received') {
            UIActions(type, puzzleJSON.msg1, data.status);
        }
        if (data.scores) {
            UIActions(type, '', data);
        }
    });
}
let UIActions = function(type, msg, status) {
    if (status == '200') {
            choices.remove();
            if (type == 'code') {
                code.remove();
                puzzle.style = 'display: grid !important';
                puzzleStartTime = new Date().getTime();
            }
            if (type == 'awareness') {
                awareness.remove();
                questions.style = 'display: grid !important';
                $('html').style = 'overflow-y: auto';
            }
    }
    if (type == 'awareness' && status == 'user-received') {
        questions.style = 'display: none !important';
        $('h1').style = 'margin: 0; position: fixed';
        $('html').style = '';
        message.innerHTML = msg;
        message.className = 'message';
        message.className = 'message successAnimation';
    }
    if (status.scores) {
        let scores = sortByValue(status.scores);
        let scoresHTML = '';
        $('h1').style = 'margin: 0; position: fixed';
        scores.forEach((item, i) => {
            scoresHTML += '<tr><td>'+(i+1)+'</td><td>'+item[1]+'</td><td>'+item[0]+'s</td></tr>';
        });

        $('#success').innerHTML = timeScore + puzzleJSON.score_th + scoresHTML+'</table><br>';
        $('#success').className = 'successAnimation';
    }

    //error handling
    if (status == 'exists' || status == '404') {
        message.innerHTML = msg;
        message.className = 'message';
        message.className = 'message error messageAnimation';
    }
}