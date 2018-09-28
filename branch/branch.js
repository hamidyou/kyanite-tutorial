const k = require('kyanite/dist/kyanite')

//Examples

k.branch(
  x => x < 10, // fnCondition
  x => x + 1, // fnTrue
  x => x - 1, // fnFalse
  0 // value
) // => 1

k.branch(
  x => x.length > 4 && x.length < 9,
  x => k.map(k.pow(2), x),
  x => x,
  [2, 3, 4]
) // => [2,3,4]

k.branch(
  x => x.length <= 4 || x.length >= 9,
  x => k.map(k.pow(2), x),
  x => x,
  [2, 3, 4, 5, 6, 7, 8, 9, 10]
) // => [4,9,16,25,36,49,64,81,100]


//Curried Examples

const branch = k.branch(
  x => x < 10,
  x => x + 1,
  x => x - 1
)

branch(0) => 1
branch(10) => 9
branch(9) => 10

const branch2 = k.branch(
  x => x.length > 4 && x.length < 9,
  x => k.map(k.pow(2), x),
  x => x
)

branch2([1, 3, 5, 7, 9]) => [1, 9, 25, 49, 81]
branch2([2, 4, 6, 8]) => [2, 4, 6, 8]
