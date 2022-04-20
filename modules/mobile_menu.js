import {$} from '/modules/selector.js';

// Mobile Header Toggle
export let mToggle = function() {
  let body = $('body');
  $('.hamburger').addEventListener('click', event => {
    body.classList.add('showMobileMenu');
  });
  $('.close').addEventListener('click', event => {
    body.classList.remove('showMobileMenu');
  });
  $('header a').addEventListener('click', event => {
    if (body.classList.contains('showMobileMenu')) {
      body.classList.remove('showMobileMenu');
    }
  });
}
