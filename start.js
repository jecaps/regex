// ^ is used to search for patterns at the beginning of strings outside of a character set[].

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));

// Challenge

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal));
