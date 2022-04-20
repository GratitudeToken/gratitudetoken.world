import {$, $$} from '/modules/selector.js';

export let roadmapMagic = function() {
    // Roadmap Magic
    let milestoneContainer = $('.milestones');
    let milestonesBG = $('.milestoneBG');
    let milestones = $$('.milestone');

    let middleMilestone = $('#middle');
    let clickCounter = 0;
    // TO MAKE them incrementally smaller from the #middle milestone, iterate over all milestones and have 1 middleReached type variable
    // another variable incrementing with each loop tracks how many milestones are before the middle milestone
    // the first variable changes to true when the index is equal to the element containing the #middle ID and then for the rest of the milestones we decrease their size
    // maybe there is a better way to track things and change their size so it all fits mobile too

    milestones.forEach(function(element, i) {
    element.addEventListener('click', event => {
        clickCounter++;
        var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
        if (window.innerWidth < 800 && (orientation === 'portrait-primary' || orientation === 'portrait-secondary')) {
            milestoneContainer.style = 'transform: translateX(-'+67*2*i+'px)';
        }
        if (orientation === 'landscape-primary' || orientation === 'landscape-secondary') {
            milestoneContainer.style = 'transform: translateX(-'+134*2*i+'px)';
        }
        milestonesBG.style = 'transform: scale(0.5);';
        milestonesBG.children[0].style = '';
        setTimeout(function(){
            milestonesBG.style = 'transform: inherit;';
            milestonesBG.children[0].style = 'animation: growRoots 4s ease forwards';
        }, 690);
        milestones.forEach(el => {
            el.id = '';
        });
        middleMilestone = element;
        element.id = 'middle';
    });
    });

    // Milestone click sound
    $$('.milestone').forEach(item => {
        item.addEventListener('click', event => {
            $("#milestone").currentTime = 0;
            $("#milestone").play();
        });
    });
}
