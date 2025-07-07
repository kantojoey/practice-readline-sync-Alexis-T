//start
const readline = require('readline-sync');
let name = readline.question("What is your name?");
console.log("Hello " + name + "! Welcome to your quiz.");

let question1 = readline.question("Question 1: If you try adding a STRING value with a NUMBER value, will JavaScript implicitly convert both values to strings or to numbers?")
console.log("Your answer was '" + question1 + "' and the correct answer was 'strings'! How did you do?");

let question2 = readline.questionInt("Question 2: If you multiply a NUMBER value of 10 with the STRING value of '3', what answer do you expect?");
console.log ("You answered " + question2 + " and the answer was...30! How did you do?");

let question3 = readline.question("Question 3: True or False, an immutable variable's value can be changed?");
 console.log("You answered '" + question3 + "' and the answer was...'False'! How did you do?");

 let question4 = readline.question("Question 4: In what form is data saved in objects?");
 console.log("You answered '" + question4 + "'. The correct answer was...'key-value pairs'!");

 let question5 = readline.question("Final question! What function can you use to convert a string to a floating number format?");
 console.log("You answered '"+ question5 + "' and the answer was 'parseFloat()'. Did you get it right?");

 console.log("Congratulations, your quiz is now over!");