const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log("console.log(validator.isEmail('example.com'))")
console.log(validator.isEmail('example.com'))

console.log("console.log(validator.isEmail('rohan@example.com'))")
console.log(validator.isEmail('rohan@example.com'))

console.log("console.log(validator.isURL('nodejs.org'))")
console.log(validator.isURL('nodejs.org'))

console.log("console.log(validator.isURL('https/mead.io'))")
console.log(validator.isURL('https/mead.io'))

console.log("console.log(validator.isURL('https://mead.io'))")
console.log(validator.isURL('https://mead.io'))




