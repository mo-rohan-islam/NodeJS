// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// const command = process.argv[2]

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// add, remove, read, list
// Challenge

// Create list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('Listing a note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()

// console.log(process.argv)
// console.log(yargs.argv)


// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }



// const msg = getNotes()
// console.log(msg)

// const greetMsg = chalk.blue.inverse.bold('Success!')
// console.log(greetMsg)

// console.log(process.argv[2])



// console.log(chalk.green(msg))
// console.log(chalk.bgGreen('Success!'))
// console.log(chalk.inverse('Inverse'))
// console.log(chalk.bold('Bold'))

// console.log(chalk.green.bgGray.bold.italic('Combination'))

// const green = chalk.green
// console.log(green('Green'))

// const error = chalk.bold.red
// const warning = chalk.keyword('yellow')

// console.log(error('Error!!!'))
// console.log(warning('Warning!'))


// const name = 'Rohan'
// const color = chalk.inverse.keyword('blue')

// console.log(color('%s... %s'), name, getNotes())






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




