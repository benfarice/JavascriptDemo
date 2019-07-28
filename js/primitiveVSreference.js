//primitive vs reference 


//primitive

var x = 50;
var y = x ;//copy the value of x to y...x and y have no relationship...because they are primitives
y = 100;
console.log(x);
console.log(y);

//reference
var moi = {job:'seller'}
var ana = moi; // both ana and moi reference to the same object
ana.job='developer';
console.log(moi.job);
console.log(ana.job);