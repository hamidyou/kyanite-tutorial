const k = require('kyanite/dist/kyanite')

// Examples

// const numArray = k.slice(2, process.argv.length, process.argv)

// console.log(numArray)

// console.log(k.sort((a, b) => a - b, numArray))

console.log(k.sort((a, b) => a - b, ['a', 'c', 'd', 'b']))
