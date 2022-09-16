// Write your tests here! 
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
describe("caesar() tests written by the yung homie jdizzy", ()=>{
    describe("caesar()", () => {
        it("should return false if the shift value is equal to 0", () => {
        const message = "grey hound"
        const shift = 0
        const actual = caesar(message, shift);
        expect(actual).to.be.false
        })
    
        it("should return false if shift less than 25", ()=> {
            const message = "grey hound"
            const shift = -26
            const actual = caesar(message,shift)
            expect(actual).to.be.false
        })
    
        it(" should return false if shift is greater than 25", ()=>{
            const message = "grey hound"
            const shift = 26 
            const actual = caesar(message,shift)
            expect(actual).to.be.false
        })
        })
        describe("encoding portion", ()=>{
            it("should ignore capital letters",()=>{
                const message = "Jaden"
                const shift = 1
               const actual = caesar(message,shift)
                const expected = "kbefo";
                expect(actual).to.equal(expected)
            })

            it("preserve the spaces",()=>{
                const message = "A Message"
                const shift = 3
               const actual = caesar(message,shift)
                const expected = "d phvvdjh";
                expect(actual).to.equal(expected)
            })

            it("should be able to handle the shifts that go past the alphabet", () => {
                const message = "zelda";
                const shift = 10;
                const actual = caesar(message, shift);
                const expected = "jovnk";
          
                expect(actual).to.equal(expected);
              });

              it("maintains spaces and other nonalphabetic symbols in the message when encoding", () => {
                const message = "?zelda?";
                const shift = 10;
                const actual = caesar(message, shift);
                const expected = "?jovnk?";
          
                expect(actual).to.equal(expected);
              });

              it("maintains spaces and other nonalphabetic symbols in the message when decoding", () => {
                const message = "?jovnk?";
                const shift = 10;
                const actual = caesar(message, shift,false);
                const expected = "?zelda?";
          
                expect(actual).to.equal(expected);
              });
        })
})
    