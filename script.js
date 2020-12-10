


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




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

console.log("passwordLength: " +passwordLength);

var includeLowerCase = confirm("Do you want to include lowercase characters?");

if(includeLowerCase){
  requireCharacterString = requireCharacterString.concat(lowerCaseCharacters);

  generatedPassword = generatedPassword.concat(Math.floor(math.random()*lowerCaseCharacters.length));
}

var includeUpperCase = confirm("Do you want to include uppercase characters?");
console.log("Include uppercase characters: " = includeUpperCase);

if(includeUpperCase){
  requireCharacterString = requireCharacterString.concat(upperCaseCharacters);

  generatedPassword = generatedPassword.concat(Math.floor(Math.random()*upperCaseCharacters.length));
}

var includeNumeric = confirm("Do you want to include numeric characters?");
console.log("Include numeric characters: " + includeNumeric);

if(includeNumeric){
  requireCharacterString = requireCharacterString.concat(numericCharacters);

  generatedPassword = generatedPassword.concat(Math.floor(Math.random()*numericCharacters.length));
}

var includeSpecial = confirm("Do you want to include special characters?");
console.log("Include special characters: " +includeSpecial);

if(includeSpecial){
requireCharacterString = requireCharacterString.concat(specialCharacters);

generatedPassword = generatedPassword.concat(Math.floor(Math.random()*specialCharacters.length));
}

console.log("Required characters array string: " + requireCharacterString);
console.log("Generated Password Length : " +generatedPassword.length);
console.log("Generated Password so far is : "+generatedPassword);

for(var i = 0; < passwordLength; i++) {
  var random = Math.floor(Math.random() * requireCharacterString.length);

  generatedPassword = generatedPassword.concat(requiredCharactersString.charAt(random));
  console.log("Generated password is : " +generatedPassword);
}
  return generatedPassword;
}

var passwordArray[]



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
