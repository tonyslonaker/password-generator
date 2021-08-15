// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// create array for each type of character:

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// empty array
 
var resultArray = [];
var userArray = [];

uppercaseArray [1];

  var numCharacter = prompt ("How many characters do you want your password to be? (8-128 characters)"); //NaN
  
  if(isNaN(numCharacter) || numCharacter < 8 || numCharacter > 128) //Hoping this is false
    alert("Character length has to be a number, 8-128 digits. Please try again.");
  
  var numbers = confirm ("Would you like numbers in your password? Press OK for yes");
  var uppercases = confirm ("Would you like uppercase letters in your password? Press OK for yes");
  var lowercases = confirm ("Would you like lowercase letters in your password? Press OK for yes?");
  var characters = confirm ("Would you like special characters in your password? Press OK for yes?");


// condition of the array

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

function copyToClipboard() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
