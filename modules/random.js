export {randomBinary, smallRandom, bigRandom}

var randomBinary = function() {
    let nr = 0;
    nr = Math.random();
    nr < 0.5 ? nr = 0 : nr = 1;
    return nr
};

var smallRandom = function(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

var bigRandom = function(min, max){
return (Math.random() * (max - min) + min).toFixed(0);
}