/* Capture groups are constructed by enclosing the regex pattern to be captured in parentheses.
  The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. \1). 
  Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.*/

let repeatStr = "row row row your boat";
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
console.log(repeatStr.match(repeatRegex)); // Returns ["row row row", "row"]

// Challenge

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
console.log(reRegex.test(repeatNum));
