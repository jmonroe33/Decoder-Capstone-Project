// Write your tests here!
const expect = require("chai").expect
const {substitution} = require("../src/substitution")

describe("substitution() test written by YA Boi Jdizzy Fo Snizzy",()=>{
    describe("substitution",()=>{
        it("should return false if alphabet is not 26 charachters long",()=>{
            const message = "message"
            const alphabet ="small"
            const actual = substitution(message,alphabet)
            expect(actual).to.be.false 
        })
        
        it("should translate the given phrase correctly based on the alphabet provided",()=>{
            const message = "jefte"
            const alphabet = "sdfghjklqwertyuiopzxcvbnma"
            const actual = substitution(message,alphabet)
            const expected = "whjxh"
            expect(actual).to.equal(expected)
        })

        it("should return false if duplicates in alphabet are found",()=>{
            const message = "johnathan"
            const alphabet = "adcadcadcadcadcadcadcadcadc"
            const actual = substitution(message, alphabet)
            expect(actual).to.be.false
        })

        it("should maintain the spaces when encoding",()=>{
            const message = "jefte gutierres"
            const alphabet = "sdfghjklqwertyuiopzxcvbnma"
            const actual = substitution(message,alphabet)
            const expected = "whjxh kcxqhpphz"
            expect(actual).to.equal(expected)
        })

        it("should maintain the spaces when decoding",()=>{
            const message = "whjxh kcxqhpphz"
            const alphabet = "sdfghjklqwertyuiopzxcvbnma"
            const actual = substitution(message,alphabet,false)
            const expected = "jefte gutierres"
            expect(actual).to.equal(expected)
        })
        
        it("should ignore capital letters",()=>{
            const message = "Jaden"
            const alphabet = "sdfghjklqwertyuiopzxcvbnma"
            const actual = substitution(message,alphabet)
            const expected = "wsghy"
            expect(actual).to.equal(expected)
        })
    })
})
