//generateBtn creates a link between the html id and the js so that when the button is clicked it calls the write password function and starts the process
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copyBtn");
var passwordFinal = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
    //passwordArray is the variable to which the password will be written as the randomizers return their values
    passwordArray = [];
    passwordLength = 0;
    //the choice variables store the values for the user input section from generatePassord()
    userLengthChoice = " ";
    userUpperChoice = false;
    userLowerChoice = false;
    userNumericChoice = false;
    userSpecialChoice = false;

    var password = generatePassword();
    password = passwordArray.join("");

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function copyPassword() {
    //passwordFinal.select highlights the password in the password field
    passwordFinal.select();
    //document.ExecCommand("Copy") copies the highlighted password to the clipboard
    document.execCommand("Copy");
}

// Add event listener to generate button. This listener will listen for a click of the button and then call the function writePassword() when clicked
generateBtn.addEventListener("click", writePassword);
// copyBtn.addEventListener("click", copyPassword);
copyBtn.addEventListener("click", copyPassword);


//generatePassword() is a function that contains and calls the input and randomize functions
function generatePassword() {
    userInput();

    function userInput() {
        //userLengthChoice gathers and stores the user's selection for how long the password should be
        userLengthChoice = prompt("Please select a password length between 8 and 128 characters long.");
            //parseInt converts the input of the user from a string to an integer
            passwordLength = parseInt(userLengthChoice, 10);
            //This if statement validates the user's choice of integer
            if (passwordLength < 8 || passwordLength > 128) {
                alert("This selection is not valid. Please try again.");
                userInput();
                return;
            } 
            //var isLetter validates the userLengthChoice to confirm that input is numeric
            var isLetter = Number(userLengthChoice);
            if (isNaN(isLetter)) {
                alert("This selection is not valid. Please try again.");
                userInput();
                return;
            }

        //These variable declarations gather and store user input data defining the password generator's parameters
        userUpperChoice = confirm("Would you like to use upper case letters? Ok for yes, cancel for no.");
        userLowerChoice = confirm("Would you like to use lower case letters? Ok for yes, cancel for no.");
        userNumericChoice = confirm("Would you like to use numeric characters? Ok for yes, cancel for no.");
        userSpecialChoice = confirm("Would you like to use special characters? Ok for yes, cancel for no.");
    }

    randomizedResult();

    //randomizedResult is a function that 
    function randomizedResult() {
        //specialChars is a string of possible outcomes for characters that are generated when special characters is an active parameter.
        const specialChars = "!@#$%^&*()?-_=+/][}{`~";
        let characterRandomizer = 0;

        //this while loop generates random characters according to the inputs given in userInput() until the user's length input is met
        while (passwordArray.length < passwordLength) {

            //characterRandomizer generates a random number between 0 and 4.
            characterRandomizer = Math.floor(Math.random() * 4);
            console.log(characterRandomizer);
            //This if statement will validate whether user inputs are active and if so will generate a random character by referencing the Character Code
            //characterRandomizer is compared by the if statement so that the occurence of different character types is randomized
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
        return passwordArray;
    }
}