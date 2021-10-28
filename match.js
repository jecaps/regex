/*To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
  Note that the .match syntax is the "opposite" of the .test method.
  
  'string'.match(/regex/);
  /regex/.test('string');
  
  */

console.log("Hello, World!".match(/Hello/));

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));

// Challenge

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
console.log(extractStr.match(codingRegex));

/* To search or extract a pattern more than once, you can use the g flag.
  Note that you can have multiple flags on your regex like /code/gi*/

let testStr = "Repeat, Repeat, Repeat";
let ourRegexp = /Repeat/;
console.log(testStr.match(ourRegexp));
let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex));

// Challenge

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
console.log(twinkleStar.match(starRegex));
