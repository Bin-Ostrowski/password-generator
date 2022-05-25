//Assignment code here
function generatePassword(){ 
    
  // ask user how long should pawword be (and validate length)

var chooseLength = prompt("How many characters should your password be? Choose a number of at least 8 and no more than 128.");
        if (!chooseLength || chooseLength === null) {
      alert("Please fill in a number between 1 and ___");
      return false;
    } else if (chooseLength < 8 || chooseLength > 128) {
      alert("Please choose a number of at least 8 and no more than 128.");
      return false;
    } else {
    var passwordLength = parseInt(chooseLength);
    };
  
  console.log("password should be " + passwordLength + " characters long.");

  // should it contain numbers
  var containNums = confirm("Should your password contain numbers? Click 'OK' for yes or 'CANCEL' for no."); 
    if (!containNums) {
      console.log("No, don't include numbers.")
    } else {
      var yesNums = '1234567890'
      console.log("should include letters and numbers")
    } 
  
  // should it contain special characters?
  var containSpecialChars = window.confirm ("Should your password contain special characters? Click 'OK' for yes or 'CANCEL' for no."); 
    if (!containSpecialChars) {
      //pass
      console.log("No, don't include special characters.")
    } else {
      containSpecialChars = "should include special characters"
      var yesSpecialChars= "!#$%&'()*+,-./:;<=>?@_`{|}~"
      console.log("Yes, include special characters.")
    } 

  // should it contain capitals
  var containCaps = window.confirm ("Should your password capitals? Click 'OK' for yes or 'CANCEL' for no."); 
  if (!containCaps) {
    //pass
    console.log("No, don't include capitals.")
  } else {
    var yesCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    console.log("Yes, include capitals.")
  } 

  //generate a random password from selected characters.


  var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
    var randomNum = getRandomInt(lowerCaseChar.length + 1);
    console.log('random char is: ', lowerCaseChar[randomNum]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


  

}

  
//   if ((containNums && containSpecialChars) && containCaps) {
//    // function allThree() {
//       console.log("numbers, special, caps");
//    // } 
//   } else if (!containNums) {
//    // function noNums() {
//       console.log("no numbers, special, caps");
//     //}
//   } else if (!containSpecialChars) {
//     //function noSpecialChars() {
//       console.log("nums, no special, caps");
//     //}
//   } else if (!containCaps) {
//     //function noCaps() {
//       console.log("numbers, special, no caps");
//     //}
//   } else {
//     console.log("no nums, no special, no caps")
//   };
// };
    
    
   

    var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
    var randomNum = getRandomInt(lowerCaseChar.length + 1);
    console.log('random char is: ', lowerCaseChar[randomNum]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


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
