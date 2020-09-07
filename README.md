# password-generator
This is a random password generator. 

This generator will prompt the user to input a series of parameters which will then be used<br>
to assemble a password. The password will be randomly generated and output to the browser<br>
<br>
The generator features these key characteristics:<br>
-Characters are randomized twice to maximize the security of the generated password<br>
  -The first randomizer randomizes which of the acceptable parameters will be parsed for<br>
   each iteration in the password's sequence<br>
  -A second randomizer then chooses from that parameter type's set of characters<br>
-The character sets for each parameter type include:<br>
  -Latin alphabet uppercase and lowercase characters<br>
  -Integers 0-9<br>
  -Special characters: !@#$%^&*()?-_=+/][}{`~<br>
-The code was written with a focus on being efficient and compact but easy to follow.<br>
-A copy to clipboard button allowing for easy transfer of the newly generated password to the clipboard.<br>
-A collection of useful links to important security-related articles

