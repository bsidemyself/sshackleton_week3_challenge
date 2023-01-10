// Assignment Code
// line 4 below was provided code from starter file

var generateBtn = document.querySelector("#generate");

// Declaring and assigning variables
var pwLength = 0;
var numbers = "0123456789"
var specChar = "!@#$%^&*()<>+?/+~"
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowCase = "abcdefghijklmnopqrstuvwxyz"
var chooseNumbers;
var chooseSpecial;
var chooseUpper;
var chooseLower;
var yourPassword = "";
var pwOptions = "";

// Start of function to generate password
function generatePassword () {
    pwLength = parseInt(prompt("How many characters would you like in your password? Choose a number between 8 and 128.", ""))
// below requires number from 8 to 128 to continue
    while (pwLength < 8 || pwLength > 128) {
        pwLength = parseInt(prompt("Password length must be between 8 and 128 characters."))
    }
//  below user confirms what criteria group they want to use in password
    chooseNumbers = confirm("Would you like the password to contain numbers?");
    chooseSpecial = confirm("Would you like the password to contain special characters?");
    chooseUpper = confirm("Would you like the password to contain uppercase letters?");
    chooseLower = confirm("Would you like the password to contain lowercase letters?");

    yourPassword = "";
// below makes a group of usable criteria for randomizer to choose from depending on which criteria set user confirmed to use
// if user said yes to all four options
    if (chooseNumbers && chooseSpecial && chooseUpper && chooseLower) {
        pwOptions = numbers.concat(specChar, upCase, lowCase);
// if user said yes to three options    
    } else if (chooseNumbers && chooseSpecial && chooseUpper) {
        pwOptions = numbers.concat(specChar , upCase);
    } else if (chooseNumbers && chooseSpecial && chooseLower) {
        pwOptions = numbers.concat(specChar, lowCase);
    } else if (chooseNumbers && chooseUpper && chooseLower) {
        pwOptions = numbers.concat(upCase, lowCase);
    } else if (chooseSpecial && chooseUpper && chooseLower) {
        pwOptions = specChar.concat(upCase, lowCase);
// if user said yes to two options    
    } else if (chooseNumbers && chooseSpecial) {
        pwOptions = numbers.concat(specChar);
    } else if (chooseUpper && chooseLower) {
        pwOptions = upCase.concat(lowCase);
    } else if (chooseSpecial && chooseUpper) {
        pwOptions = specChar.concat(upCase);
    } else if (chooseNumbers && chooseLower) {
        pwOptions = numbers.concat(lowCase);
    } else if (chooseNumbers && chooseUpper) {
        pwOptions = numbers.concat(upCase);
    } else if (chooseSpecial && chooseLower) {
        pwOptions = specChar.concat(lowCase);
// if user said yes to one option    
    } else if (chooseNumbers) {
        pwOptions = numbers;
    } else if (chooseSpecial) {
        pwOptions = specChar;
    } else if (chooseUpper) {
        pwOptions = upCase;
    } else if (chooseLower) {
        pwOptions = lowCase;
    }
// below is what has computer pick random characters from the criteria sets user confirmed to use
    for (let i = 0; i <pwLength; i++) {
        yourPassword += pwOptions.charAt(Math.floor(Math.random() * pwOptions.length));
    }
    return yourPassword;
}

// links the password to the spot on page defined in the html file
document.getElementById("password").innerHTML = yourPassword;


// everything below was provided code from starter file

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);