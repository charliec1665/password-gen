//create array for lowercase, uppercase, numeric, and special characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '#', '$', '%', '&', '*', '+', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '^', '_'];

var generatePassword = function () {
  //prompt user for length of password (>8 <128) using a window.prompt
  var promptLength = "";

  while (promptLength === "" || promptLength === null) {
    promptLength = prompt("How long would you like your password to be? Must be longer than 8 characters.");
  }

  //conditional recursive function call
  if (promptLength < 8) {
    window.alert("Your password must be between 8 and 128 characters. Please try again.");
    return generatePassword();
  } else if (promptLength > 128) {
    window.alert("Your password must be between 8 and 128 characters. Please try again.");
    return generatePassword();
  }

  //prompt user whether they would like to include lowercase characters
  var confirmLowercase = window.confirm("Would you like to include lowercase characters?");

  var confirmUppercase = window.confirm("Would you like to include uppercase characters?");

  if (confirmLowercase) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuv'
    var charactersLength = promptLength;
    for ( var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  } else if (confirmLowercase && confirmUppercase) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuv'
    var charactersLength = promptLength;
    for ( var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  else {
    window.alert("Your password must include at least one type of character.");
  }

  //prompt user whether they would like to include uppercase characters

  //prompt user whether they would like to include numeric characters

  //prompt user whether they would like to include special characters

  //based on user selections, use randomization to go through their selected arrays and generate a password

  console.log(generatePassword(promptLength));
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
