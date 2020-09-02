//generateBtn creates a link between the html id and the js so that when the button is clicked it calls the write password function and starts the process
var generateBtn = document.querySelector("#generate");
//passwordArray is the variable to which the password will be written as the randomizers return their values
var passwordArray = [];
var passwordLength = 0;
//the choice variables store the values for the user input section from generatePassord()
var userLengthChoice = " ";
var userUpperChoice = false;
var userLowerChoice = false;
var userNumericChoice = false;
var userSpecialChoice = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  password = passwordArray.join("");

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button. This listener will listen for a click of the button and then call the function writePassword() when clicked
generateBtn.addEventListener("click", writePassword);

//generatePassword() is a function that contains and calls the input and randomize functions
function generatePassword() {
    userInput();
    randomizedResult();

    function userInput() {
        //These variable declarations gather and store user input data defining the password generator's parameters
        userLengthChoice = prompt("Please select a password length between 8 and 128 characters long.");
        //parseInt converts the input of the user from a string to an integer
        passwordLength = parseInt(userLengthChoice, 10);
            //The if statement validates the user's choice of integer
            if (userLengthChoice < 8 || userLengthChoice > 128) {
                alert("This selection is not valid. Please try again.");
                userInput();
            } 
        userUpperChoice = confirm("Would you like to use upper case letters? Ok for yes, cancel for no.");
        userLowerChoice = confirm("Would you like to use lower case letters? Ok for yes, cancel for no.");
        userNumericChoice = confirm("Would you like to use numeric characters? Ok for yes, cancel for no.");
        userSpecialChoice = confirm("Would you like to use special characters? Ok for yes, cancel for no.");
    }

    //randomizedResult is a function that 
    function randomizedResult() {
        //specialChars is a string of possible outcomes for characters that are generated when special characters is an active parameter.
        var specialChars = "!@#$%^&*()?";
        var characterRandomizer = 0;

        for (var i = 0; i < passwordLength; i++) {
            characterRandomizer = Math.floor(Math.random() * 4);

            if (characterRandomizer === 0 && userUpperChoice === true) {
                passwordArray.push([String.fromCharCode(Math.floor(Math.random() * 26) + 65)]);
            } else if (characterRandomizer === 1 && userLowerChoice === true) {
                passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
            } else if (characterRandomizer === 2 && userNumericChoice === true) {
                passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
            } else if (characterRandomizer === 3 && userSpecialChoice === true) {
                passwordArray.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
            }
        }
    }
    return passwordArray;
}