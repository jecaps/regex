/* A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
  A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

  On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
  A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 
  The rest of the pattern is returned if the negative lookahead part is not present.*/

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password));

// Challenge

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/i; // Change this line
console.log(pwRegex.test(sampleWord));
