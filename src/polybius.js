// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",}

  const encodeKey = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }
  // Encode function
  function encoder(input) {
    let result = ""; // create empty string to store result
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") { // if input is a space, add a space to result
        result += " ";
      } else {
        result += encodeKey[input[i]]; // add encoded letter to result
        // {a: 11, b: 21, c: 31, d: 41, e: 51,}
        // encodeKey["c"] = 31;
      }
    }
    console.log("result on line 31 encoder function", result);
    return result;
  }
  // 153142
  // x = 1, y = 5 ==> 15
  // Decode function
  function decoder(input) {
    let result = ""; //  create empty string to store result
    if(input.replace(/\s/g, "").length % 2 !== 0) return false; // if input is odd, return false

    for (let i = 0; i < input.length; i += 2) { // i += 2 to skip spaces
      if (input[i] === " " ) { // if input is a space, add a space to result }
        result += " "; // add space to result
        i--; // decrement i by 1
        // 
      } else {
        let x = input[i]; // x = 3
        let y = input[i + 1]; // add encoded letter to result ex: x = 3, y = 1, result = 31
        let key = `${x}${y}`; // create key to look up in decodeKey["31"] = "c" 
        result += decodeKey[key]; // add decoded letter to result aka decodeKey[input[i] + input[i + 1]]
      }
    }
    console.log("result on line 53 decoder functiuon", result);
    return result;
  }

  function polybius(input, encode = true) {
    if(encode) {
      return encoder(input.toLowerCase());
    } else {
      return decoder(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
// function getNumberPairs(encodedMessage){
//     let pairs = [] 
//     for(let index = 0; index < encodedMessage.length; index++){
//       pairs.push(encodedMessage.slice(index,index + 2))
      
//     }
//     // return console.log(pairs)
//   }
// make all letters lowercase
// let lowerCase = input.toLowerCase()
    
// // if were encoding here is what were gonna do
// if(encode){
//   // make a modified encoded or decoded message holder
//   let theSecretMessage = ""
//   // loop through the input to isolate the index of each number
//   reduce((acc, curr) => {}, 0)
//   for(let i = 0; i < lowerCase.length; i++){
//     // assign that index to a variable
//     // // jaden 
//     //    01234
//       let singleLetter = lowerCase[i]
//         // combigne i/j because they are one number insinde of the polybius square
//       if (singleLetter === "i" || singleLetter === "j"){
//         singleLetter = "(i/j)"
//       }
//         // find the current letters index from the alphabed array
//         // looking for the index of my single letter inside of the alphabet array
//         // and returns a number (position)
//       let currentLetterIndex = alphabet.indexOf(singleLetter)
//        // now find the current letters index from the polybius square
//       // use currentLetterIdex to access the polybiusSquare array at specified index
//       let polybius = polybiusSquare[currentLetterIndex]; 
//           // check to see if polybius is a number and if not make it an empty string
//       if (typeof polybius === "undefined"){
//           polybius = " ";
//       }
//         // put the encoded numbers inside of the message 1 by one as the loop goes through each letter 
//         theSecretMessage += polybius
//         // console.log(theSecretMessage)
//   }
//   return theSecretMessage
 
// } else {
//   // the number of spaces should be even otherwise return false. 
//   // make a helper function that will take my input and grab two letters.
//   let seperatedWords = input
//   // console.log(seperatedWords)
//   let removedSpaces = seperatedWords.replace(" ", "")
//   // loop through the inputed number set or encoded numners 
//     // I need to make sure the word is even number of characters
//     let result = ""
//     if(removedSpaces.length % 2 == 0){
      
      
//       let numberPairs = seperatedWords.match(/([0-9]){2}/g)
//       // gives an array of seperated numbers by pair
//       console.log(numberPairs)
      
//       for(let i = 0; i < numberPairs.length; i++) {
//         let pairsIndex = numberPairs[i]
        
//         let indexOfPair = polybiusSquare.indexOf(pairsIndex)
         
//         let matchingLetter = alphabet[indexOfPair]
          
      
//           result += matchingLetter
      
//       }
    
//     } else {
//       return false 
      
//       // let numberPairs = getNumberPairs(seperatedWords)
//       // console.log(numberPairs)
//     }
   
//     console.log(result)
//     return result
//   } 