//Assignment code here
function generatePassword(){ 
  
  //generating random characters
  var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
    var randomInt = getRandomInt(lowerCaseChar.length + 1);
    console.log('random char is: ', lowerCaseChar[randomInt]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
  
  var number = '1234567890';
  var randomNum = getRandomNum(number.length + 1);
  console.log('random num is: ', number[randomNum]);
  function getRandomNum(max) {
      return Math.floor(Math.random() * max);
  }

  var specialChar= "!#$%&'()*+,-./:;<=>?@_`{|}~";
  var randomSpecialChar = getRandomSpecialChar(specialChar.length + 1);
  console.log('random special char is: ', specialChar[randomSpecialChar]);
  function getRandomSpecialChar(max) {
      return Math.floor(Math.random() * max);
  }

  var capitalChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomCapitalChar = getRandomCapitalChar(capitalChar.length + 1);
  console.log('random capital char is: ', capitalChar[randomCapitalChar]);
  function getRandomCapitalChar(max) {
      return Math.floor(Math.random() * max);
  }

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


  // should it contain numbers this should be a function
  var containNum = confirm("Should your password contain numbers? Click 'OK' for yes or 'CANCEL' for no."); 
    if (!containNum) {
      console.log("No, don't include numbers.");
    } else {
      
      console.log("should include letters and numbers");
    };
  

  // should it contain special characters?
  var containSpecialChar = window.confirm ("Should your password contain special characters? Click 'OK' for yes or 'CANCEL' for no."); 
    if (!containSpecialChar) {
      console.log("No, don't include special characters.");
    } else {
      console.log("Yes, include special characters.");
    };

  // should it contain capitals
  var containCap = window.confirm ("Should your password capitals? Click 'OK' for yes or 'CANCEL' for no."); 
  if (!containCap) {
    console.log("No, don't include capitals.");
  } else {
    console.log("Yes, include capitals.");
  } 

  //generate a random password from selected characters.
  if ((containNum && containSpecialChar) && containCap) {
    window.alert("Your password is " + lowerCaseChar[randomInt] + 
      number[randomNum] + 
      specialChar[randomSpecialChar] + 
      capitalChar[randomCapitalChar]);
  }
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
