

// Create a Letter construcor that takes in a character
// var visable;
function Letter(character) {
    this.character = character;
    this.visable = !/[a-z1-9]/i.test(character);
    // Set a "visable" variable
    // If a character is not a number or letter, set visable to true
    // Store the character in a variable
    // this.visable = visable;
    

    // Letter.toString method
    // If visable === true, return character
    // Else, return "_"
    this.toString = function () {

        if (this.visable === true) {
            return this.character;
           
        }
        else {
            return "_";
        }
    };
    // Letter.getSolution method
    // return character
    this.getSolution = function () {
        return this.character;
        
    };

    // Letter.guess method takes a character guess
    // if the stored character and the guessed character are equal, set visible to true, return true
    // else return false
    this.guess = function (charGuess) {
        if (charGuess.toUpperCase() === this.character.toUpperCase()) {
            this.visable = true;
            return true;
        }
        else {
            return false;
        };
    };

};
module.exports = Letter