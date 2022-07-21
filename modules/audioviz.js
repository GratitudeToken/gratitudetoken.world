import {$, $$} from '/modules/selector.js';
import {bigRandom} from '/modules/random.js';

// Audio Visualisation
export let audioviz = function() {
    // random number for a song ID
    var r = bigRandom(1, 300);
    var theSongID = r <= 100 ? theSongID = 'Gratitude' : r <= 200 ? theSongID = 'Dictator' : theSongID = 'Pure_Imagination';
    var audio = $('#'+theSongID);
    

    var audioPlaying = false;

    $('.audioviz').addEventListener('click', event => {

        if (!audioPlaying) {
            audio.play();
            audioPlaying = true;
        } else {
            audio.pause();
            audioPlaying = false;
        }

        var context = new AudioContext();
        // fix bug for error on pause
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();
        src.connect(analyser);
        analyser.connect(context.destination);
        analyser.fftSize = 32;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);
        var circles = [];
        var circlesEl = $('.circles');
        for (var i = 0; i < bufferLength; i++) {
            var node = document.createElement('div');
            node.style.width= node.style.height = (i/bufferLength) + 'px';
            node.classList.add('circle');
            circles.push(node);
            circlesEl.appendChild(node);
        }
        var max = 256;
    
        function renderFrame() {
            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(dataArray);

            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                circle.style.cssText = 'transform: scale('+((dataArray[i]/max))+')';
            }
        }

        renderFrame();
    });
}