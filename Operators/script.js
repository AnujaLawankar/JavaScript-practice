var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);//true
var expression2 = (e < d);//false = to <=

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);//=== to ==
console.log(b == e);// !== to ==
console.log(c > b);// < to >
console.log(d < 1);// true

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && !expression2); //true normal to !
console.log(expression1 || expression2);//true ! to normal

