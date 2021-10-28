/* The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), 
  and returns true or false if your pattern finds something or not. */

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));

// Challenge

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);
