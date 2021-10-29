/* Use \S to search everything except whitespace.
  It is also similar to the character class [^ \r\t\f\n\v]*/

let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
console.log(whiteSpace.match(nonSpaceRegex).length);

// Challenge

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
console.log(sample.match(countNonWhiteSpace));
