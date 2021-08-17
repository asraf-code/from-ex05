var readlineSync = require('readline-sync');

// input
var userAnswerAge = readlineSync.question("Am I older than 25? ");

console.log ("You entered " + userAnswerAge);

var score = 0


// process
if (userAnswerAge === "yes") {
  // output
   console.log ("You are right! ");
   score = score + 1;
   console.log ("Score is " + score);
} else {
  // output
  console.log ("You are wrong! ");
  score = score - 1;
  console.log ("Score is " + score);
  }

