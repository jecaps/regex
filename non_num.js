// \D is shortcut for [^0-9] which looks for non-digits characters

// Challenge

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
console.log(movieName.match(noNumRegex).length);
