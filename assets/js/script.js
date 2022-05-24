// Assignment code here
function generatePassword(){ 
    // ask user how long should pawword be (and validate length)
    // should it contain special characters?
    // should it contain numbers
    // should it contain capitals
    // generate a random password from selected characters.

    var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
    var randomNum = getRandomInt(lowerCaseChar.length + 1);
    console.log('random char is: ', lowerCaseChar[randomNum]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

}
// var passwordPrompt = function(generatePassword) {
//     window.prompt(
//         "Select which criteria to include in the password. Please enter 1 for PASSWORD LENGTH or 2 for CHARACTER TYPES."
//     );
//     passwordPrompt = parseInt (passwordPrompt);
//     switch(passwordPrompt) {
//         case 1:
//             window.prompt(
//                 "Please choose a length of at least 8 characters and no more than 128 characters."
//             )
//     }

// };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

