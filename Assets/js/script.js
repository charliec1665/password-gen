
var generatePassword = function () {
  //prompt user for length of password (>8 <128) using a window.prompt
  var promptLength = "";
 
  //loop so if they enter an improper response, it will reprompt the user
  while (promptLength === "" || promptLength === null) {
    promptLength = prompt("How long would you like your password to be? Must be at least 8 characters.");
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
  //prompt user whether they would like to include uppercase characters
  var confirmUppercase = window.confirm("Would you like to include uppercase characters?");
  //prompt user whether they would like to include numeric characters
  var confirmNumber = window.confirm("Would you like to include numeric characters?");
  //prompt user whether they would like to include special characters
  var confirmSpecial = window.confirm("Would you like to include special characters?");


  //based on user selections, reference arrays in strings object
  var strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    special: '!@#$%^&*-_'
  }

  // function to add characters to string
  var determineRandomizationString = () => {
    var randomizationString = "";
    // check each condition and add to the string if the condition is true
    if (confirmLowercase) randomizationString += strings.lowercase;
    if (confirmUppercase) randomizationString += strings.uppercase;
    if (confirmNumber) randomizationString += strings.numbers;
    if (confirmSpecial) randomizationString += strings.special;
    return randomizationString;
  }

  var result = "";
  var characters = determineRandomizationString();
  var charactersLength = characters.length;
  // for loop to go through the arrays
  for (i = 0; i < promptLength; i++) {
    // equation to randomize the characters pulled from the arrays and append them
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;

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
