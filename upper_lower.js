/* You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). 
You put two numbers between the curly brackets - for the lower and upper number of patterns. */

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));

// Challenge

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i;
console.log(ohRegex.test(ohStr));
