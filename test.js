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

/* Regular expressions search for a literal match of a /String/.
  Any other forms of /String/ like string or STRING will not match.*/

let testString = "Hello, my name is Kevin.";
let testRegexp = /Kevin/;
console.log(testRegexp.test(testString));
let wrongRegex = /kevin/;
console.log(wrongRegex.test(testString));

// Challenge

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
console.log(waldoRegex.test(waldoIsHiding));

/*  You can search for multiple patterns using the alternation or OR operator: |.
  This operator matches patterns either before or after it.*/

// Challenge

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString));

/* You can match both uppercases and lowercases using what is called a flag. 
  There are other flags but here you'll focus on the flag that ignores case- the i flag.
  You can use it by appending it to the regex.*/

// Challenge

let fccRegex = /freecodecamp/i;
console.log(fccRegex.test(testStr));
