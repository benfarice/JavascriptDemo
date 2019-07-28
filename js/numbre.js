var binNum = 0b11111111;
console.log(binNum)
var octNum = 0o50;
console.log(octNum);
var hexNum = 0xDE;
console.log(hexNum);

//-----------------
//Floating numbers

var floatNum = 56.98;
var floatNum2 = .4;
var floatNum3 = 200.00;//00 to integer

console.log(floatNum,floatNum2,floatNum3);

//Decimal numbers
var billion = 7.2e9;
console.log(billion);


//small numbers
var ms = 1.23e-6;
console.log(ms);

//interval values of a number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Infinity
console.log(1/0)
console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(-Number.MAX_VALUE - Number.MAX_VALUE)

//NaN
console.log("not a number" /3); 
// ==> NaN
console.log(NaN / 5);//==> NaN
console.log(NaN == NaN);//NaN is not a value so no comparaison =>> false