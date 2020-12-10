// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword(){

    // initialized an empty password
    var generatedPassword = "";


    // set of characters that can be included in the password
    var upperCaseCharacters = "ABCDEFGHIJKLMONPQSTUVWXYZ";
    var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numericCharacters = "1234567890";
    var specialCharacters = "!@#$%^&*()";


    // the set of characters that WILL BE used
    var requiredCharacterString = "";

  // asks the user for length of characters
  var passwordLength = prompt ("How many characters would you like in your password? \n(Please enter a number between 8-12.)");

  // checks if the input is valid, otherwise ask again
  while(passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("The password must be between 8 and 128 characters. \n(Please select a number between 8-12.)")
  }

  //console.log("Password Length: " +passwordLength);

  // ask user if we want lowercase
  var includeLowerCase = confirm("Do you want lowercase characters?");

  if(includeLowerCase){
    requiredCharacterString = requiredCharacterString.concat(lowerCaseCharacters);

    generatedPassword = generatedPassword.concat(Math.floor(Math.random()*lowerCaseCharacters.length));
  }

  // ask if user want uppercase
  var includeUpperCase = confirm("Do you want uppercase characters?");
  console.log("Include uppercase characters: "+includeUpperCase);

  if(includeUpperCase){
  requireCharacterString = requiredCharacterString.concat(upperCaseCharacters);

  generatedPassword = generatedPassword.concat(Math.floor(Math.random()*upperCaseCharacters.length));
  }

  // ask if user want numbers
  var includeNumeric = confirm("Do you want numeric characters?");
  console.log("Include numeric characters: "+includeNumeric);

  if(includeNumeric){
  requireCharacterString = requiredCharacterString.concat(numericCharacters);

  generatedPassword = generatedPassword.concat(Math.floor(Math.random()*numericCharacters.length));
  }

  // ask user if want special characters
  var includeSpecial = confirm("Do you want special characters?");
  console.log("Include special characters: "+includeSpecial);

  if(includeSpecial){
  requireCharacterString = requiredCharacterString.concat(specialCharacters);

  generatedPassword = generatedPassword.concat(Math.floor(Math.random()*specialCharacters.length));
  }

  console.log("Required characters array string: " + requireCharacterString);
  console.log("Generated Password Length : " +generatedPassword.length);
  console.log("Generated Password so far is : "+generatedPassword);




  for(var i = 0; i < passwordLength; i++) {


    var random = Math.floor(Math.random() * requireCharacterString.length);


    generatedPassword = generatedPassword.concat(requiredCharacterString.charAt(random));
    console.log("Generated password is: "+generatedPassword);
  }


  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);