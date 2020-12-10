// Assignment Code
function generatePassword(){

  var generateBtn = document.querySelector("#generate");

var upperCaseCharacters = "ABCDEFGHIJKLMONPQSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "1234567890";
var specialCharacters = "!@#$%^&*()";

var requireCharacterString = ""

var passwordLength = prompt ("How many characters would you like in your password? \n(Please enter a number between 8-12");

while(passwordLength < 8 || passwordLength > 128){
  passwordLength = prompt("The password must be between 8 and 128 characters. \nPlease select a number between 8-12.")
}

var includeLowerCase = confirm("")







var includeUpperCase = confirm("Do you want to include uppercase characters?");
console.log("Include uppercase characters: " = includeUpperCase);

if(includeUpperCase){
  requireCharacterString = requireCharacterString.concat(upperCaseCharacters);
}

var includeNumeric = confirm("Do you want to include numeric characters?");
console.log("Include numeric characters: " + includeNumeric);

if(inclue)










var passwordArray[]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generatedPassword = generatedPassword.concat(require)
}
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
