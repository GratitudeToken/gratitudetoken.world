import {$, $$} from '/modules/selector.js';
import {smallRandom} from '/modules/random.js';

export let observeEverything = function() {
// Intersection Observer Animations

let BiiP_animation = function() {
  $$('.BiiP .word').forEach((element, i) => {
    let delay = i*230;
    element.style = 'animation: BiiP_title 1s ease forwards; animation-delay: '+delay+'ms';
    $$('#section2 .BiiP_svg').style = 'animation: BiiP_svg 0.23s ease-in forwards';
  });
}

let mainSpecs_animation = function() {
  $$('.main-specs div').forEach((element, i) => {
    let delay = smallRandom(0.1, 1);
    element.style = 'animation: mainSpecsColor 3s ease forwards; animation-delay: '+delay+'s';
    $('img', element).style = 'animation: mainSpecsIcon 2s ease forwards; animation-delay: '+delay+'s';
  });
}
let GENESIS_animation = function() {
  $('.GENESIS_logo').style = 'animation: GENESIS 4s ease-in-out infinite';
}
let SHIELD_animation = function() {
  $('.SHIELD').classList.add('observed');
  let SHIELDwords = $$('.SHIELD .word');
  setTimeout(function () {

    setTimeout(function () {
      $('.word7 img').style = 'opacity: 1 !important';
    }, 6001);
  
    $$('#letters i').forEach((element, i) => {
      element.style = '';
      let delay = i*1000;
      element.style = 'animation: fadeIn 0.6s ease forwards; animation-delay: '+delay+'ms';
  
    });
  
    SHIELDwords.forEach((element, i) => {
      let delay;
      i < 6 ?  delay = i*1000 : delay = i*1132;
      element.style = 'animation: SHIELD 1.2s ease-in-out forwards; animation-delay: '+delay+'ms';
  
      if (i == 6) {
        setTimeout(function () {
          element.style = 'opacity: 1 !important; transform: scale(1)';
        }, 6863);
      }
    });
  }, 1200);

}

// SHIELD click function
$('.SHIELD').addEventListener('click', ()=>{
  SHIELD_animation();
});

function callbackRouter(entries, observer) {
    let entry = entries[0];
    let target = entry.target;
    if (entry.intersectionRatio > 0) {
      if (target.dataset.callback) {
        let nr = target.dataset.callback;
        if (nr == 0) BiiP_animation();
        if (nr == 1) mainSpecs_animation();
        if (nr == 2) GENESIS_animation();
        if (nr == 3 && !$('.SHIELD').classList.contains('observed')) SHIELD_animation();
      }
    }
  }
  
  const observer = new IntersectionObserver(callbackRouter);
  const elements = $$('.observableElement');
  elements.forEach(observer.observe.bind(observer));
}
