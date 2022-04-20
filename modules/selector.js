export {$, $$};

// An easier way to get elements in the DOM with vanilla JS

// Get a single first matching element
var $ = function (selector, parent) {
    return (parent ? parent : document).querySelector(selector);
};
// Get all matching elements
var $$ = function (selector, parent) {
    return (parent ? parent : document).querySelectorAll(selector);
};

// One downside of querySelectorAll() is that it returns a NodeList instead of an array. That means that you can’t use methods like map() and reduce() with it out-of-the-box.
// Let’s set up $$() to automatically convert the NodeList to an array before returning it to give us more flexibility.
// The Array.slice() method creates a new array from an existing one. By using call(), we can apply that method to an array-like not-actually-an-array object like a NodeList.

// var $$ = function (selector, parent) {
//     return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
// };