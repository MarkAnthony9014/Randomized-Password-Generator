var generateBtn = document.querySelector("#generate");

// Assignment code here

var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "`~!@#$%^&*()-_=+[{;:'<,>./?}]";
var numberChars = "0123456789";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
