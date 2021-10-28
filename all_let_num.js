//  \w is shortcut for [A-Za-a0-9_]. They are also known as shorthand character classes

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

// Challenge

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
console.log(quoteSample.match(alphabetRegexV2).length);
