const k = require('kyanite/dist/kyanite')

// Examples

k.add(1, 1) // => 2

k.add(1.5, 2.3) // => 3.8

k.add(7, -5)

// Curried Examples

const addFunction = k.add(7)

addFunction(3) // => 10

addFunction(54) // => 61

k.reduce(k.add, 0, [1, 2, 3]) // => 6
