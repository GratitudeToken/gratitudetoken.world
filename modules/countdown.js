import {$, $$} from '/modules/selector.js';

export let countdowns = function() {
  // Set the date we're counting down to
  var IDODeadline = new Date("Dec 02, 2022 23:59:00").getTime();
  
  // Update the count down every 1 second
  var countdown = function(name, date) {
    setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = date - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        if (hours < 10) { hours = "0" + hours } else if (hours === 0) { hours = "00" }
        if (minutes < 10) { minutes = "0" + minutes } else if (minutes === 0) { minutes = "00" }
        if (seconds < 10) { seconds = "0" + seconds } else if (seconds === 0) { seconds = "00" }

        // Display the result
        let countdownContainer = $$(name);
        for (let i = 0; i<countdownContainer.length; i++) {
          countdownContainer[i].innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
          // If the count down is finished, write some text
          if (distance < 0) {
            countdownContainer[i].innerHTML = "Public Presale is now Closed";
          }
        }


    }, 1000);
  }
  countdown('.IDODeadline', IDODeadline);
}