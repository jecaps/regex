/* Sometimes the patterns you want to search for may have parts of it that may or may not exist. 
  However, it may be important to check for them nonetheless.
  You can specify the possible existence of an element with a question mark, ?. 
  This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional. */

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));

// Challenge

let favWord = "favorite";
let favRegex = /favou?rite/;
console.log(favRegex.test(favWord));
