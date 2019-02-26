const { add, reduce } = require('kyanite')

// Examples

add(1, 1) // => 2

add(1.5, 2.3) // => 3.8

add(7, -5)

// Curried Examples

const addFunction = add(7)

addFunction(3) // => 10

addFunction(54) // => 61

reduce(add, 0, [1, 2, 3]) // => 6
