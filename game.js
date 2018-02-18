

var Word = require('./word');
var inquirer = require('inquirer');
// var guessesLeft = 10;
// var lettersGuessed = [];
// // var wordList = ["cats", "wicked", "rent", "oklahoma", "phantom", "matilda"];
// // var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
// // var currentWord = new Word(randomWord);
// var alreadyGuessed = false;

// Create a Game constructor
function Game() {
  // Play method
  var self = this;
  // Sets an initial guesses variable
  // Calls for the nextWord method
  this.play = function () {
    this.guessesLeft = 10;
    this.nextWord();
  }


  // NextWord method
  // Get a random word
  // Sets currentWord to a new Word constructor and passes the random word to the Word constructor
  // Calls for makeGuess method
  this.nextWord = function () {
    // chosen word is chosen randomly from words. 
    var wordList = ["cats", "wicked", "rent", "oklahoma", "phantom", "matilda"];
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    this.currentWord = new Word(randomWord);
    console.log("\n" + this.currentWord + "\n")
    this.makeGuess();
  }


  // makeGuess method
  // Calls askForLetter, then...
  // if guessesLeft is < 1
  // Show word
  // Ask to play again

  this.makeGuess = function () {
    this.askForLetter().then(function () {


      if (self.guessesLeft < 1) {
        console.log(self.currentWord.getSolution());
        self.askToPlayAgain();


      }
      // Ask to play again
      // else if guessedCorrectly
      // reset guessesLeft
      // Call nextWord

      else if (self.currentWord.quessedCorrectly()) {
        console.log("You got it! On to the next word.");
        self.guessesLeft = 10;
        self.nextWord();
      }
      // else
      // Call makeGuess
      else {
        self.makeGuess();
      }
    })
  };

  // askToPlayAgain method confirms to play again and then either plays or quits
  this.askToPlayAgain = function () {
    inquirer.prompt([
      {
        type: "confirm",
        message: "Would you like to play again\n?",
        name: "playAgain"
      }
    ])
      .then(function (answer) {
        if (answer.playAgain) {
          guessesLeft = 10;
          console.log("\nSweet! Let's play again! ")
          self.play();
        }
        else {
          console.log("\nAnother time them.")
          return;
        }
      }
      )
  };


  // askForLetter method asks for a letter
  this.askForLetter = function () {
    //  return
    return inquirer.prompt([
      {
        type: "input",
        message: "Pick a letter between a and z.\n",
        name: "letterChoice"
      }
    ])
      .then(function (answer) {
        // Runs currentWord.guessLetter(letterChoice)
        // if correct
        // Log correct

        console.log("I'm here");
        var didGuessCorrectly = self.currentWord.guessLetter(answer.letterChoice);
        if (didGuessCorrectly) {
          console.log("Correct.");
        }

        else {
          self.guessesLeft--;
          console.log("Incorrect.");  
        }


      });
  };
};



  module.exports = Game;