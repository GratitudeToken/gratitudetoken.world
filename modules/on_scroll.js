import {$, $$} from '/modules/selector.js';
import {cubeSpin} from '/modules/cube.js';
import {sparky} from '/modules/fire_sparks.js';

let mainSpecsImagesLoaded = false;
let sectionsImagesLoaded = false;
let sparksHidden = false;
export let onScroll = function() {
    //distanceToTop = nodesSupernova.getBoundingClientRect().top; // for supernova
    
    var y = window.scrollY;
    // pre-load images when getting to a certain scroll position
    if (y > 100 && mainSpecsImagesLoaded == false) {
        mainSpecsImagesLoaded = true;
        $$('.main-specs img').forEach(item => {
            item.src = 'svgs/' + item.dataset.bg;
        });
        $('#scrollIndicator').style = 'animation-play-state: paused;';
        $('#scrollIndicator').style = 'animation: fadeOut 1s ease forwards !important';
    }

    // toggle fire sparks
    if (y > 669 && sparksHidden == false) {
        sparksHidden = true;
        $('#fire_sparks').innerHTML = '';
        $('#fire_sparks_styles').innerHTML = '';
    }
    if (y < 669 && sparksHidden == true) {
        sparksHidden = false;
        sparky();
    }

    // pre-load background-images when getting to a certain scroll position
    if (y > 888 && sectionsImagesLoaded == false) {
        sectionsImagesLoaded = true;
        $$('.section').forEach(item => {
            if (item.dataset.bg) item.style = 'background-image: url(img/' + item.dataset.bg; + ') no-repeat 50% 50%;';
        });
        // run cube rotation
        setInterval(cubeSpin, 23);
    }
}