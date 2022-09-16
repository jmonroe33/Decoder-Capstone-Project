// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
 const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function checkForDuplicates(inputedAlphabet){
    let result = ""
    // loop through the inputMessage to isolate each letter in the inputded alphabet
    for(let i = 0; i< inputedAlphabet.length; i++){
      // check to see if the result string already has the letter that were comparing to it.
      if(result.includes(inputedAlphabet[i])){
      return false
      } else{
        // if its a new letter then add it into the result string
      result += inputedAlphabet[i]
      }
    }
  }

 function substitution(input, alphabet, encode = true) {
    // check to see if there is no alphabet or if the alphabets charachters is not long enough
    if(!alphabet || alphabet.length !== 26 ){
      return false
      // also check to see if there are duplicates in the alphabet that is passed in.
    } else if(checkForDuplicates(alphabet) === false){
      return false
    } 
    if(encode){
      // first set the input to be lowercase so that issues do not arise later.
      const lowerCase = input.toLowerCase();
      // make a empty message holder aka string
      let encodedMessage = "";
      // loop through the lowercased input to isolate each letter 
      for (let i = 0; i < lowerCase.length; i++) {
        // assign a variable the value of each letter 
        let currentLetter = lowerCase[i];
        // grab the index of that letter from the standard alphabet
        let indexOfCurrentLetter = standardAlphabet.indexOf(currentLetter);
      // add the index of the current letter inside the substitute alphabet and add that to the message holder
        encodedMessage += alphabet[indexOfCurrentLetter] || currentLetter;

      }
      return encodedMessage
    } else {
      // make everyting lowercase again
      const lowerCase = input.toLowerCase();
        // make a empty place to store decoded letters 
      let decodedMessage = "";
       // loop through the encoded letters to isolate each letter
      for (let i = 0; i < lowerCase.length; i++) {
        // assign each letter to the variable current letter
        let currentLetter = lowerCase[i];
        // grab the index of that letter in the substitute alphabet 
        let indexOfCurrentLetter = alphabet.indexOf(currentLetter);
        // use that index that was just grabbed to get the letter found at the same index in the standard alphabet '
        // then add that letter to the decoded message. and if you come across a space then add the space as well.
        decodedMessage += standardAlphabet[indexOfCurrentLetter] || currentLetter;

      }
      return decodedMessage
    }
  }
    return {
    substitution,
   }  ;
})();

module.exports = { substitution: substitutionModule.substitution };
