const { add, compose, divide, filter, isZero, map, multiply, pipe, pow, range, reduce, rem } = require('kyanite')

// Examples

console.log(pipe([
  add(1), // => 4 -->
  multiply(4), // => 16 -->
  divide(2), // => 8 -->
  pow(2) // => 64
], 3)) // => 64

// OR

console.log(pow(2, divide(2, multiply(4, add(1, 3))))) // => 64

const numArray = range(1, 21)

console.log(pipe([
  map(pow(2)),
  filter(compose(isZero, rem(3))),
  reduce(add, 0)
], numArray)) // => 819

const squares = map(pow(2))
const divBy3 = filter(compose(isZero, rem(3)))
const sum = reduce(add, 0)

console.log(pipe([
  squares,
  divBy3,
  sum
], numArray)) // => 819
