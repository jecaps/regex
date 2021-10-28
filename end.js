// $ is used to search for patterns at the end of strings.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));

// Challenge

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));
