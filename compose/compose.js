const {
  add,
  compose,
  filter,
  isOdd,
  isZero,
  map,
  pow,
  range,
  rem
} = require('kyanite')

// Examples

// Simple math with k.compose()

console.log(
  'compose(Math.sqrt, add(1), 99) =>',
  compose(
    Math.sqrt,
    add(1),
    99
  )
) // => 10

console.log(
  'compose(isOdd, pow(3), 3) => ',
  compose(
    isOdd,
    pow(3),
    3
  )
) // => true

// Transforming a list

// Find all of the squares for integers from 1 - 20 that are evenly divisible by 3.

// Create an array of numbers from 1 - 20.
const numArray = range(1, 21)

// Use compose to transform array
console.log(
  'compose(filter(compose(isZero, rem(3))), map(pow(2)), numArray) => ',
  compose(
    filter(
      compose(
        isZero,
        rem(3)
      )
    ),
    map(pow(2)),
    numArray
  )
) // => [ 9, 36, 81, 144, 225, 324 ]
