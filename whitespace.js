/* Use \s to match whitespace or spaces between letters.
  This pattern not only matches whitespace, but alsi carriage return, tab, form feed, and new line characters*/

let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));

// Challenge

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
console.log(sample.match(countWhiteSpace));
