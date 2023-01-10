# Week 3 Challenge: Random Password Generator using Javascript
## Description
The goal of this project was to create a random password generator using provided starter files.  We were provided with the HTML and CSS files for the page and had to write the code that produced the functionality of the page in Javascript.  The major challenges were getting the criteria sets based on what the user chooses and the "for" statement that would pick the random characters from the chosen criteria.
## Assignment Acceptance Criteria (from provided ReadMe):
GIVEN I need a new, secure password


WHEN I click the button to generate a password


THEN I am presented with a series of prompts for password criteria


WHEN prompted for password criteria


THEN I select which criteria to include in the password


WHEN prompted for the length of the password


THEN I choose a length of at least 8 characters and no more than 128 characters


WHEN asked for character types to include in the password


THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


WHEN I answer each prompt


THEN my input should be validated and at least one character type should be selected


WHEN all prompts are answered


THEN a password is generated that matches the selected criteria


WHEN the password is generated


THEN the password is either displayed in an alert or written to the page
## Assignment Criteria Met:
* the pop window asks about the length of the password and won't continue unless the input is between 8 and 128
* next the window asks if the user would like to include numbers, special characters, uppercase and lowercase letters in a series of questions
* the next part of the code takes the criteria categories the user selected to use and makes them available in a new group/string for the randomizer "for" statement later to choose from
* once the randomizer has chosen characters from the criteria catergories the user selected, it writes the password to the input space on the page so it can be copied and pasted elsewhere
## Link to Deployed Application
Link to deployed application:  https://bsidemyself.github.io/sshackleton_week3_challenge/
Link to GitHub repository:  https://github.com/bsidemyself/sshackleton_week3_challenge
## References and Tutorials
I used these links for general help with forming the generate password function itself:
* https://dev.to/code_mystery/random-password-generator-using-javascript-6a
* https://stackoverflow.com/questions/61021441/random-password-generator-javascript

This link helped with getting the selected categories to be used in the password with the "concat" function:
* https://www.w3schools.com/jsref/jsref_concat_string.asp

I referenced this link for help with the random "for" statement:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
