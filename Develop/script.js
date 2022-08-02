//Arrays for password characters

var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "?", "/", "|"]
var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Need an array for the different arrays, so that we can add the "chars" arrays' values to characterCriteria array depending on user selection.
var characterCriterias = []


//generatePassword function

function generatePassword() {

  //Variable with empty string to fill.
  var randomPassword = "";


  //Prompt for password length, "if" statements. 
  var charLength = window.prompt("Password must be between 8 and 128 characters. How many characters would you like your password to be?");
  //Prompt returns numbers as a string, need to convert to number data type.
  charLength = parseInt(charLength);
  
    if (charLength > 128) {
    window.alert("Please select a number between 8 and 128");
    //Make sure function restarts if user makes an invalid selection.
    return generatePassword();
  }

   if (charLength < 8) {
    window.alert("Please select a number between 8 and 128");

    return generatePassword();
  }
  //What if user enters in something other than a number?
  

  //Prompt for upper case characters, confirm alert, "if true" statement. 
  //Need to add uppercaseChars array to main array if confirm is true.
  var upperCasePrompt = confirm("Would you like for upper case alphabets to be included in the password?");
   if (upperCasePrompt === true) {
    characterCriterias = characterCriterias.concat(uppercaseChars);
  }

  // Prompt for lower case characters, confirm alert, "if true" statement.
  //Need to add lowercaseChars array to main array if confirm is true.
  var lowerCasePrompt = confirm("Would you like for lower case alphabets to be included in the password?");
   if (lowerCasePrompt === true) {
    characterCriterias = characterCriterias.concat(lowercaseChars);
  }

  //Prompt for special characters, confirm alert, "if true" statement.
  //Need to add specialChars array to main array if confirm is true.
  var specialCharsPrompt = confirm("Would you like for special characters to be included in the password?");
   if (specialCharsPrompt === true) {
    characterCriterias = characterCriterias.concat(specialChars);

  }

  //Prompt for numbers, confirm alert, "if true" statement.
  //Need to add numberChars array to main array if confirm is true.
  var numberCharsPrompt = confirm("Would you like for numbers to be included in your password?");
   if (numberCharsPrompt === true) {
    characterCriterias = characterCriterias.concat(numberChars);
   }

  //For statement to make sure the password is randomized. Used math floor to get whole numbers. For loop will run as many times as the chosen password length (charsLength)
  for (var i = 0; i < charLength; i++) {
    //Math.floor to make a whole number, Math.random() * characterCriterias.length (user chosen length) to multiply the chosen length by a random whole number. This value will be the array index of user selected data.
    //Add that randomized character to the empty string as many times as the chosen length.
   var randomChar = characterCriterias[Math.floor(Math.random() * characterCriterias.length)]
   randomPassword = randomPassword + randomChar
  }

  console.log(characterCriterias)
  console.log(randomPassword)

//Fill the empty randomPassword string with selected randomized criteria.
  return randomPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate Button Id Selector
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
