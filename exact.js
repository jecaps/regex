// To specify a certain number of patterns, just have that one number between the curly brackets i.e. {3}

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A4));
console.log(multipleHA.test(A3));
console.log(multipleHA.test(A100));

// Challenge

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i;
console.log(timRegex.test(timStr));
