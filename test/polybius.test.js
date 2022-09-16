// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe( "polybius() test written Mr Jdizzy fo Shizzy ",()=>{
    describe("polybius()",()=>{
        it("should translate letters i and j to 42 when encoding.",()=>{
          const message = "jingle"
          const actual = polybius(message)
          const expected = "424233221351"
          expect(actual).to.equal(expected)
        })
        
        it("should ignore the capital letters",()=>{
            const message = "Jaden"
            const actual = polybius(message)
            const expected = "4211415133"
            expect(actual).to.equal(expected)
        })

        it("should preserve the spaces when encoding",()=>{
            const message = "jeffery dallas"
            const actual = polybius(message)
            const expected = "42511212512445 411113131134"
            expect(actual).to.equal(expected)
        })
     
        it("should preserve the spaces when decoding",()=>{
            const message = "42511212512445 411113131134"
            const actual = polybius(message,false)
            const expected = "(i/j)effery dallas"
            expect(actual).to.equal(expected)
        })  

        it("should decode 42 to (i/j)",()=>{
            const message = "42511212512445 411113131134"
            const actual = polybius(message,false)
            const expected = "(i/j)effery dallas"
            expect(actual).to.equal(expected)
        })  
    })

})
