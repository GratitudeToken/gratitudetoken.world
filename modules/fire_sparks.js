import {$, $$} from '/modules/selector.js';
import {smallRandom, bigRandom} from '/modules/random.js';
import {audioviz} from '/modules/audioviz.js';

// FIRE SPARKS
  // TO DO! pass in sparky() function parameter for number of sparks to be less on mobile, calculate based on width divided by a number
  // ALSO VERY IMPORTANT! To improve animation performance, implement the method used in audioviz.js for populating the DOM with the elements
export let sparky = function(){
  var parent = $("#fire_sparks");
  var styles = $("#fire_sparks_styles");
  parent.innerHTML = styles.innerHTML = '';
  var total_sparks = 22; // plus 0 it's 23
  var random_size_and_speed = true; //parameters are in the for loop below

  // for the cool sparks
  let randomGratitude = bigRandom(0, 22);

  // the HTML creator function
  var spark_HTML = function(index, inner_speed, inner_delay, spark_travel_speed, spark_travel_delay) {
    let fixed_index;
    let fixed_inner_speed;
    // check if we random_size_and_speed is true or not
    random_size_and_speed == false ? (fixed_index = '', fixed_inner_speed = 2000) : (fixed_index = index, fixed_inner_speed = inner_speed);

    // play Gratitude Song when clicking/touching on the right Spark, there are more future tasks for this in audioviz.js
    // play dictator's speech video when clicking/touching on the right spark
    let insertHTML = '';
    if (index == randomGratitude) insertHTML = '<div class="audioviz"><div class="circles"></div></div>';
    

    // we are returning the HTML code for each spark here every time the spark_HTML function is called by the loop below
    return '<div class="spark" style="animation-name: travel'+index+'; animation-duration: '+spark_travel_speed+'ms; animation-delay: '+spark_travel_delay+'ms;"><div class="spark_inner" style="animation-name: scaling'+fixed_index+'; animation-duration: '+fixed_inner_speed+'ms; animation-delay:'+inner_delay+'ms;"></div>'+insertHTML+'</div>';
  }

  // loop to create all sparks

  for(let i=0; i<(total_sparks+1); i++) {
    // if random random_size_and_speed is not activated we add the keyframe once
    if (random_size_and_speed == false && i == 0) {
      styles.innerHTML = "@keyframes scaling {0% {transform: scale3d(0.4, 0.4, 1);} 50% {transform: scale3d(1.4, 1.4, 1);} 100% {transform: scale3d(0.4, 0.4, 1);}}";
    }
    // if random_size_and_speed is activated we add a different value keyframe for each spark
    if (random_size_and_speed == true) {
      let min = smallRandom(0.1, 0.4); // set the min size value range
      let max = smallRandom(1, 1.5); // set the max size value range
      styles.innerHTML += "@keyframes scaling"+i+" {0% {transform: scale3d("+min+", "+min+", 1);} 50% {transform: scale3d("+max+", "+max+", 1);} 100% {transform: scale3d("+min+", "+min+", 1);}}";
    }
    
    // random travel directions; play around with the coordinates, they are expressed in CSS vh and vw units, you can also remove or add more keyframes, just make sure you add the correct number of variables as well
    // let random_sign = function () { return Math.cos(Math.PI * Math.round(Math.random())); } // we need random negative or positive values for future positions of sparks
    let point1w = bigRandom(0, 100); // this is the X position of the initial spark
    let point1h = 106; // this is the Y position of the initial spark
    let point2w = bigRandom(0, 100);
    let point2h = -6;
    styles.innerHTML += "@keyframes travel"+i+" { 0% {transform: translate("+point1w+"vw, "+point1h+"vh)} 100% {transform: translate("+point2w+"vw, "+point2h+"vh);} }";
    
    // call the random function to get a random inner_speed
    let inner_speed = bigRandom(1500, 2000); // miliseconds
    // call the random function to get a random inner_delay
    let inner_delay = bigRandom(1, 1200); // miliseconds
    // call the random function to get a random number for this spark's travel duration
    let speed = bigRandom(12000, 23000); // miliseconds
    // call the random function to get a random number for this spark's travel speed
    let delay = bigRandom(1, 15000); // miliseconds
    

    // duplicate the HTML structure for the fire sparks
    parent.innerHTML += spark_HTML(i, inner_speed, inner_delay, speed, delay);
  }

    // Play Fairy Spark Audio
    // for the sparks
    $$('.spark').forEach(item => {
      item.addEventListener('mouseover', event => {
          $("#fairy").play();
      });
    });

    audioviz();
}