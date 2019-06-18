const {
  add,
  between,
  branch,
  compose,
  identity,
  length,
  lt,
  map,
  pow,
  subtract,
  within
} = require('kyanite')

// Examples

console.log(
  `
  branch(
    lt(10), // fnCondition
    add(1), // fnTrue
    subtract(1), // fnFalse
    0 // value
  ) => `,
  branch(
    lt(10), // fnCondition
    add(1), // fnTrue
    subtract(1), // fnFalse
    0 // value
  )
) // => 1

console.log(
  `
  branch(
    compose(
      within(4, 9),
      length
    ),
    map(pow(2)),
    identity,
    [2, 3, 4]
  ) => `,
  branch(
    compose(
      within(4, 9),
      length
    ),
    map(pow(2)),
    identity,
    [2, 3, 4]
  )
) // => [2,3,4]

console.log(
  `
  branch(
    compose(
      between(4, 9),
      length
    ),
    map(pow(2)),
    identity,
    [2, 3, 4, 5, 6, 7, 8, 9, 10]
  ) => `,
  branch(
    compose(
      between(4, 9),
      length
    ),
    map(pow(2)),
    identity,
    [2, 3, 4, 5, 6, 7, 8, 9, 10]
  )
) // => [4,9,16,25,36,49,64,81,100]

// Curried Examples
console.log('------------------Curried Examples------------------')

const fn = branch(lt(10), add(1), subtract(1))

console.log('fn(0) => ', fn(0)) // => 1
console.log('fn(10) => ', fn(10)) // => 9
console.log('fn(9) => ', fn(9)) // => 10

const gn = branch(
  compose(
    within(4, 9),
    length
  ),
  map(pow(2)),
  identity
)

console.log('gn([1, 3, 5, 7, 9]) => ', gn([1, 3, 5, 7, 9])) // => [1, 9, 25, 49, 81]
console.log('gn([2, 4, 6, 8]) => ', gn([2, 4, 6, 8])) // => [2, 4, 6, 8]
