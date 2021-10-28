// \d is shortcut for [0-9] which looks for a single character of any number between zero and nine.

// Challenge

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
console.log(movieName.match(numRegex).length);
