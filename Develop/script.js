// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays to pull from
var letter = ["a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
caps = ["A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z"];
numeric = ["0,1,2,3,4,5,6,7,8,9"];
symbol = ["!,@,#,$,%,&,*,<,>,/,?,+,"];
userChoice = [];
//

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

function collectInfo() {
  //prompt for pw length
  var length = prompt("Please enter a number between 8 and 128");

  // prompt for uppercase
  var upper = confirm("Include uppercase letters? Click OK to agree");
  // prompt for lowercase
  var lower = confirm("Include lower case letters? Click OK to agree");
  // prompt for numbers
  var num = confirm("Include numbers? Click OK to agree");
  // prompt for symbols
  var sym = confirm("Include symbols? Click OK to agree");

  console.log(length + upper + lower + num + sym);

  //if statements to follow
  // if (length > 8 && length < 128) {

  // } else {
  // }
  if (upper) {
    userChoice = userChoice.concat(caps);
  } else {
    return;
  }
  if (lower) {
    userChoice = userChoice.concat(letter);
  } else {
    null;
  }
  if (numeric) {
    userChoice = userChoice.concat(numeric);
  } else {
    null;
  }
  if (symbol) {
    userChoice = userChoice.concat(symbol);
  } else {
    null;
  }

  console.log(userChoice);
}
collectInfo();
// function password_generator(len) {
//   var length = len ? len : 16;
//   var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
//   var numeric = "0123456789";
//   var punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
//   var password = "";
//   var character = "";
//   var crunch = true;
//   while (password.length < length) {
//     entity1 = Math.ceil(string.length * Math.random() * Math.random());
//     entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
//     entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
//     hold = string.charAt(entity1);
//     hold = password.length % 2 == 0 ? hold.toUpperCase() : hold;
//     character += hold;
//     character += numeric.charAt(entity2);
//     character += punctuation.charAt(entity3);
//     password = character;
//   }
//   password = password
//     .split("")
//     .sort(function () {
//       return 0.5 - Math.random();
//     })
//     .join("");
//   return password.substr(0, len);
// }

// console.log(password_generator());
