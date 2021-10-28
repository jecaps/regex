// \W is the shortcut for [^A-Za-z0-9_] that matches everything but letter and numbers

let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
console.log(numbers.match(shortHand));
console.log(sentence.match(shortHand));

// Challenge

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
console.log(quoteSample.match(nonAlphabetRegex).length);
