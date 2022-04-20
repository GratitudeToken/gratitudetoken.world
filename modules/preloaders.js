
import {$, $$} from '/modules/selector.js';

// SLIDER BACKGROUND-IMAGE PRELOADER
export let preloader = function() {
    let slidez = $$('.slide');
    let slideCounter = 1;
    // this is the function for the interval, every X seconds (4000ms currently) we load the next slide background image
    let backgroundImageInterval = setInterval(function() {
      slidez[slideCounter].style = 'background-image: url(slides/slide'+slideCounter+'.jpg);';
      slideCounter += 1;
    }, 4000);
    // clear image preload interval after 14 seconds
    setTimeout(function() {clearInterval(backgroundImageInterval);}, 11000);
}