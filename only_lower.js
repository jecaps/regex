// To only specify the lower number of patterns, keep the first number followed by a comma i.e. {3,}.

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));
console.log(multipleA.test(A100));

// Challenge

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Change this line
console.log(haRegex.test(haStr));
