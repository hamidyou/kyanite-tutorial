const k = require('kyanite/dist/kyanite')

// Examples

// Simple math with k.compose()

k.compose(Math.sqrt, x => x + 1, 99) // => 100

k.compose(k.isOdd, x => k.pow(3), 3) // => true

// Transforming a list

// Find all of the squares for integers from 1 - 20 that are evenly divisible by 3.

// Create an array of numbers from 1 - 20.
const numArray3 = k.range(1, 21)

// Use compose to transform array
console.log(k.compose(k.filter(x => k.rem(3, x) === 0), k.map(k.pow(2)), numArray3)) // => [ 9, 36, 81, 144, 225, 324 ]
