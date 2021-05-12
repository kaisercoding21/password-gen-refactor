// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays to pull from
var letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
caps = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
symbol = ["!", "@", "#", "$", "%", "&", "*", "<", ">", "/", "?", "+"];
userChoice = [];
randomPass = [];
//

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

function generatePassword() {
  //prompt for pw length
  var passCount = prompt("Please enter a number between 8 and 128");

  if (passCount >= 8 && length <= 128) {
    console.log(passCount);
  } else {
    prompt("Invalid selection. \n Please enter a number between 8 and 128.");
    return;
  }

  // prompt for uppercase
  var upper = confirm("Include uppercase letters? Click OK to agree");
  // prompt for lowercase
  var lower = confirm("Include lower case letters? Click OK to agree");
  // prompt for numbers
  var num = confirm("Include numbers? Click OK to agree");
  // prompt for symbols
  var sym = confirm("Include symbols? Click OK to agree");

  console.log(passCount + upper + lower + num + sym);

  //if statements to follow

  if (upper) {
    userChoice = userChoice.concat(caps);
  }
  if (lower) {
    userChoice = userChoice.concat(letter);
  }
  if (num) {
    userChoice = userChoice.concat(numeric);
  }
  if (sym) {
    userChoice = userChoice.concat(symbol);
  }
  console.log(userChoice);
  var passString = userChoice.join("");
  console.log(passString);
  randomPass = "";

  for (var i = 0; i < passCount; i++) {
    var scramble = Math.floor(Math.random() * userChoice.length);
    randomPass = randomPass + userChoice[scramble];

    console.log(randomPass);
  }
  return randomPass;
}
