const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const stringData = dataBuffer.toString()
const JSONdata = JSON.parse(stringData)

const myName = 'Rohan'
const myAge = 23

JSONdata.name = myName
JSONdata.age = myAge

newStringData = JSON.stringify(JSONdata)
fs.writeFileSync('1-json.json',newStringData)


console.log(JSONdata)














// =================================================

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

// ==========================

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)


// ===============================================


// console.log(bookJSON)       // string

// const parsedData = JSON.parse(bookJSON)     // string to JSON
// console.log(parsedData.author)

// ===================================

// const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const parsedData = JSON.parse(dataBuffer)
// console.log(parsedData.title)

// // const dataSet = JSON.stringify(dataBuffer)
// // console.log(dataBuffer)

// // console.log(dataBuffer.toString())

// // const book = {
// //     title: 'Ego is the Enemy',
// //     author: 'Ryan Holiday'
// // }

// // const bookJSON = JSON.stringify(book)
// // fs.writeFileSync('1-json.json', bookJSON)


// // console.log(bookJSON)

// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)