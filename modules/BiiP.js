import {$} from '/modules/selector.js';

export let BiiP_button = function() {
    // toggle starfield on BiiP
    let toggleStarfield = true;
    $('BiiP').addEventListener('click', event => {
      if (toggleStarfield) {
        FIELD.start();
        toggleStarfield = false;
        starfieldCanvas.style = 'animation: fadeIn 1s ease forwards'
      } else {
        toggleStarfield = true;
        starfieldCanvas.style = 'animation: fadeOut 1s ease forwards';
        setTimeout(function(){
            FIELD.stop();
          }, 1000);
      }
    });
}