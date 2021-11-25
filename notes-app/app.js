// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(chalk.green(msg))
console.log(chalk.bgGreen('Success!'))
console.log(chalk.inverse('Inverse'))
console.log(chalk.bold('Bold'))

console.log(chalk.green.bgGray.bold.italic('Combination'))

const green = chalk.green
console.log(green('Green'))

const error = chalk.bold.red
const warning = chalk.keyword('yellow')

console.log(error('Error!!!'))
console.log(warning('Warning!'))


const name = 'Rohan'
const color = chalk.inverse.keyword('blue')

console.log(color('%s... %s'), name, getNotes())






// console.log("console.log(validator.isEmail('example.com'))")
// console.log(validator.isEmail('example.com'))

// console.log("console.log(validator.isEmail('rohan@example.com'))")
// console.log(validator.isEmail('rohan@example.com'))

// console.log("console.log(validator.isURL('nodejs.org'))")
// console.log(validator.isURL('nodejs.org'))

// console.log("console.log(validator.isURL('https/mead.io'))")
// console.log(validator.isURL('https/mead.io'))

// console.log("console.log(validator.isURL('https://mead.io'))")
// console.log(validator.isURL('https://mead.io'))




