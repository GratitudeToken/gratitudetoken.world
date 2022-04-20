
import {$, $$} from '/modules/selector.js';
import {addListenerMulti} from '/modules/multi_listener.js';

// Magic Cube
// CUBE ROTATION, only horizontally for now
let section6 = $('#section6');
let cube = $('#cube');
let cubeRange = $('#cubeRange');
let animationDegrees = 0;
let mouseUpDown = 'up';
export let cubeSpin = function() {
  if (mouseUpDown == 'up' && animationDegrees < -180) {
    animationDegrees = 180;
    cube.style = 'transform: rotateY(180deg)';
  }
  if (mouseUpDown == 'up') {
    animationDegrees -= 0.12;
    cubeRange.value = animationDegrees*10;
    cube.style = 'transform: rotateY('+(animationDegrees)+'deg)';
  }
}

addListenerMulti(cubeRange, 'mousedown touchstart', function(){
  mouseUpDown = 'down';
  cubeRange.value = animationDegrees*10;
  cube.style = 'animation: none; transform: rotateY('+(animationDegrees)+'deg)';
});

let cubeMagic = function() {
  cube.style = 'animation: none; transform: rotateY('+$('#cubeRange').value/10+'deg)';
}

cubeRange.addEventListener("input", function () {
  cubeMagic();
});

addListenerMulti(cubeRange, 'mouseup touchend', function(){
  mouseUpDown = 'up';
  animationDegrees = $("#cubeRange").value/10;
  cube.style = 'animation: none; transform: rotateY('+animationDegrees+'deg)';
});