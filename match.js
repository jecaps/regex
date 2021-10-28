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
