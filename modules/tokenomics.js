import {$, $$} from '/modules/selector.js';

export let tokenomics = function() {
    console.log('gigi');
    let onloadCallback = function() {
        alert("grecaptcha is ready!");
    };
    $('#order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Public Presale has not started yet!');
    });
};