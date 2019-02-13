const k = require('kyanite/dist/kyanite')

// Examples

k.pipe([
  k.add(1), // => 4 -->
  k.mul(4), // => 16 -->
  k.div(2), // => 8 -->
  k.pow(2) // => 64
], 3) // => 64

k.pow(2, k.div(2, k.mul(4, k.add(1, 3)))) // => 64

// OR

k.add(1, 3) //= > 4
k.mul(4, 4) // => 16
k.div(2, 16) // => 8
k.pow(2, 8) //= > 64

const numArray = k.range(1, 21)

k.pipe([
  k.map(x => k.pow(2, x)),
  k.filter(x => k.rem(3, x) === 0),
  k.reduce((acc, n) => acc + n, 0)
], numArray) // => 819

const numArray2 = k.range(1, 21)
const squares = x => k.pow(2, x)
const divBy3 = x => k.rem(3, x) === 0
const sum = x => k.reduce((acc, n) => acc + n, 0, x)

k.pipe([
  squares,
  divBy3,
  sum
], numArray2) // => 819
