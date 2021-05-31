// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generating the password
function generatePassword() {

    // Setting up placeholder variables
    randPassword = [];
    randChar = [];
    randArr = [];
    combinedArray = [];

    // Setting up the arrays
    let arrUpLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let arrLowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let arrNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let arrSpcChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", ":", ";", "?", "+", "-", "/", "=", "<", ">", ",", ".", "~"];

    // Setting up the password length
    let passwordLength = parseInt(prompt("How many characters do you want in your password? Please choose between 8 and 128 characters."));

    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Length must be more than 8 and less than 128 characters.")
      passwordLength = parseInt(prompt("How many characters do you want in your password?"));
    }

    console.log("Our password length is a " + typeof passwordLength + " of " + passwordLength);

    console.log("------------");

    // Setting up the available character types
    let QupChar = confirm("Do you want upper case characters?");
    let QlowChar = confirm("Do you want lower case characters?");
    let QnumChar = confirm("Do you want numerical characters?");
    let QspecChar = confirm("Do you want special characters?");

    // Making sure at least one character type was selected
    while (!QupChar && !QlowChar && !QnumChar && !QspecChar) {
    alert("You must select at least one character type.");
    QupChar = confirm("Do you want upper case characters?");
    QlowChar = confirm("Do you want lower case characters?");
    QnumChar = confirm("Do you want numerical characters?");
    QspecChar = confirm("Do you want special characters?");
    } 

    //Defining the combinations
    console.log("Our password will consist of:")
    if (QupChar === true) {
    console.log("Upper case characters");
    }
      
    if (QlowChar === true) {
    console.log("Lower case characters");
    }
      
    if (QnumChar === true) {
    console.log("Numerical characters");
    }
      
    if (QspecChar === true) {
    console.log("Special characters");
    }
    console.log("------------");

    //Setting up the combined array.
    if (QupChar === true) {
      for (let i = 0; i < arrUpLetters.length; i++) {
        combinedArray.push(arrUpLetters[i]);
      }
    }
    if (QlowChar === true) {
      for (let b = 0; b < arrLowLetters.length; b++) {
        combinedArray.push(arrLowLetters[b]);
      }
    }
    if (QnumChar === true) {
      for (let c = 0; c < arrNumbers.length; c++) {
        combinedArray.push(arrNumbers[c]);
      }
    }
    if (QspecChar === true) {
      for (let d = 0; d < arrSpcChars.length; d++) {
        combinedArray.push(arrSpcChars[d]);
      }
    }

    // Setting up the array of random characters
    for (let i = 0; i < passwordLength; i++) {
      let randChar = combinedArray[Math.floor(Math.random() * combinedArray.length)];
      randArr.push(randChar);
    }
    console.log("Here is the array of randomly-selected characters:")
    console.log(randArr);
    
    // Converting array of objects into a string
    randPassword = randArr.join('');
    console.log("Here is our password:")
    console.log(randPassword);
    console.log("------------")

    // RETURN of randPassword creates the value of password
    return randPassword;
}


// Write password to the #password input
  function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
