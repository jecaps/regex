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

/* You can search for a literal pattern with some flexibility with character classes. 
  Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets. */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

// Challenge

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
console.log(quoteSample.match(vowelRegex));

// Inside a character set, you can define a range of characters to match using a hyphen character: -.

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let ggRegex = /[a-e]at/;
console.log(catStr.match(ggRegex));
console.log(batStr.match(ggRegex));
console.log(matStr.match(ggRegex));

// Challenge

let alphabetRegex = /[a-z]/gi;
console.log(quoteSample.match(alphabetRegex));

// Using hypen, it is also possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
console.log(jennyStr.match(myRegex));

// Challenge

let myRege = /([h-s2-6])/gi;
console.log(quoteSample.match(myRege));

// Negated character sets are sets of characters that you do not want to match.

let myQuote = "When the cat is away, the 3 blind mice will play.";
let regex = /[^aeiou0-9]/gi;
console.log(myQuote.match(regex));

// Use the + character to match a character(or a group of charcters) that appears one or more times in a row.

let difficultSpelling = "Mississippi";
let sRegex = /s+/g; // Change this line
console.log(difficultSpelling.match(sRegex));

// Use * to match characters that occur zero or more times.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

// Challenge

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; //
console.log(chewieQuote.match(chewieRegex));
