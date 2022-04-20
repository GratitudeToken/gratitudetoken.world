import {$, $$} from '/modules/selector.js';
import {smallRandom, randomBinary} from '/modules/random.js';

export let slider = function() {
    // Make some letters baby!
    $$('.makeLetters').forEach((element, i) => {
        element.innerHTML = element.textContent.replace(/\S/g, '<span class="letter">$&</span>');
    });
    
    // !!!!!!!!!! IMPORTANT! - Make a skip animation button somewhere in the bottom side of the screen, to show header and the other elements quicker !!!!!!!!

    // SLIDER EFFECTS
    // GRATITUDE fadeIn and blurIn effects
    $$('.theTitle .letter').forEach((element, i) => {
        let duration = smallRandom(3, 4);
        let delay = smallRandom(3, 6);
        let binary = randomBinary();
        let fadeOrBlur;
        binary == 1 ? fadeOrBlur = 'fadeIn' : fadeOrBlur = 'blurIn';
        element.style = 'animation: '+fadeOrBlur+' '+duration+'s ease forwards; animation-delay: '+delay+'s';
    });

    let fadeIn = 'animation: fadeIn 1s linear 0.1s forwards';
    $('.theTitle').style += fadeIn;
    $('#slides .small_p').style += fadeIn;

    // slider paragraph text typewriter effect
    let slidesP = $$('#slides .small_p .letter');
    slidesP.forEach((element, i) => {
        let delay = i*32+8000;
        element.style = 'animation: fadeIn 1s ease forwards; animation-delay: '+delay+'ms';
    });

}
