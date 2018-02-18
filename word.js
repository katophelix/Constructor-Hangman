
// require letter
var Letter = require("./letter");

// Make a constructor Word that takes a word paramater chosenWord=picked by computer for game
var Word = function (chosenWord) {
    this.letters = chosenWord.split("").map(function (char) {
        return new Letter(char);
    })
    // console.log("letters array " + this.letter);
    // Make an array of the letters in the word letters to be guessed
    // word becomes list of letters
    

// getSolution method
this.getSolution = function () {
    // iterates through each letter
    // returns the solution for each to form an array of solved letters
    return this.letters.map(function (letter) {
        return letter.getSolution();
    }).join("");


}
      

    

// Create a string from the array of solved letters
// toString method
// returns a string from the letters array
this.toString = function () {
    return this.letters.join(" ");


           
        };
// guessLetter method
// Checks to see if any of the letters in the array match the user's 
// guess and updates a variable `foundLetter`
// Print the word guessed so far--because we set the method for toString,
// return foundLetter (either true or false)
this.guessLetter = function (character) {
    var foundLetter = false;
    this.letters.forEach(function (letter) {
        if (letter.guess(character)) {

            foundLetter = true;
        }

    });
    console.log("\n" + this + "\n");
    return foundLetter;
};

// guessedCorrectly method
// Returns true if all the letters in the word have been guessed
// Try using .every on the letters array variable
this.quessedCorrectly = function () {
    return this.letters.every(function (letter) {
        return letter.visable;


    });
};
};

module.exports = Word








