const { add, reduce } = require('kyanite')

// Examples

console.log(add(1, 1)) // => 2

console.log(add(1.5, 2.3)) // => 3.8

console.log(add(7, -5)) // => 2

// Curried Examples

const add7 = add(7)

console.log(add7(3)) // => 10

console.log(add7(54)) // => 61

console.log(reduce(add, 0, [1, 2, 3])) // => 6
