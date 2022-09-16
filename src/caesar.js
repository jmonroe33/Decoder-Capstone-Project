// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const myAlphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

  // this function takes in 3 inputs the message to shift, how much it needs to shigt \
  // and whether to encode or decode.
  function caesar(input, shift, encode = true) {
    if (
      !input ||
      typeof input !== "string" ||
      !shift ||
      typeof shift !== "number"
    ) {
      return false;
    } else {
      if (shift === 0 || shift < -25 || shift > 25) {
        return false;
      }
    }
    // Make everything lowercase because thats how it checks it.
    /* remember that shift is a number that can be added to or subrtracted from. */
    let lowercase = input.toLowerCase();
    let mySecretMessage = "";
    if (encode) {
      // use a for loop to go through the length of the input
      for (let i = 0; i < lowercase.length; i++) {
        // grab the index of each lowercase letter and assign it a variable
        let currentLetter = lowercase[i];
        // use defined data set to find the index of current letter
        let indexOfCurrentLetter = myAlphabet.indexOf(currentLetter);
        // if current letter is a character of the alphabet
        if (!currentLetter.match(/[a-z]/i)) {
          mySecretMessage += currentLetter;
        } else {
          if (shift + indexOfCurrentLetter < 0) {
            indexOfCurrentLetter += 26;
          }
          // Remember new index is a number
          let newIndex = indexOfCurrentLetter + shift;
          let encodedLetter = myAlphabet[newIndex];
          mySecretMessage += encodedLetter;
        }

        // now that we maade the input lowercase we need to....
      }
      return mySecretMessage;
    } else {
      for (let i = 0; i < lowercase.length; i++) {
        let currentLetter = lowercase[i];
        let indexOfCurrentLetter = myAlphabet.indexOf(currentLetter);
        if (!currentLetter.match(/[a-z]/i)) {
          mySecretMessage += currentLetter;
        } else {
          let myShift = shift;
          if (shift > 0) {
            myShift = shift - shift * 2;
          } else {
            myShift = shift + shift * -2;
          }
          if (indexOfCurrentLetter - shift < 0) {
            indexOfCurrentLetter += 26;
          }

          let newIndex = indexOfCurrentLetter + myShift;
          let decodedLetter = myAlphabet[newIndex];
          mySecretMessage += decodedLetter;
        }
      }
      return mySecretMessage;
    }

    // your solution code here
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
