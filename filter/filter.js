const {
  add,
  compose,
  filter,
  gt,
  gte,
  includes,
  isZero,
  lte,
  pow,
  rem
} = require('kyanite')

// Examples

console.log('filter(gt(1), [1, 2, 3]) => ', filter(gt(1), [1, 2, 3])) // => [2,3]
console.log('------------------------------------------------------')

const divBy4 = compose(
  isZero,
  rem(4)
)
console.log(
  `
const divBy4 = compose(isZero, rem(4))

filter(divBy4, [2, 4, 6, 8]) => `,
  filter(divBy4, [2, 4, 6, 8])
) // => [4,8]
console.log('------------------------------------------------------')

const a = includes('a')
const animals = ['zebra', 'horse', 'cat', 'dog']

console.log(
  `
const a = includes('a')
const animals = ['zebra', 'horse', 'cat', 'dog']

filter(a, animals) => `,
  filter(a, animals)
) // => ['zebra', 'cat']

console.log('------------------------------------------------------')

// Curried Examples
const filterer = filter(
  compose(
    lte(2),
    add(1)
  )
)
console.log(
  `
const filterer = filter(
  compose(
    lte(2),
    add(1)
  )
)

filterer([1, 2, 3] => `,
  filterer([1, 2, 3])
) // => [1]
console.log('------------------------------------------------------')

const doubleDigitSquare = filter(
  compose(
    gte(10),
    pow(2)
  )
)
console.log(
  `
const doubleDigitSquare = filter(
  compose(
    gte(10),
    pow(2)
  )
)

doubleDigitSquare([2, 4, 6, 8]) => `,
  doubleDigitSquare([2, 4, 6, 8])
) // => [4,6,8]
console.log('------------------------------------------------------')

const containsE = filter(includes('e'))
const animalsFilter = ['zebra', 'cat', 'dog', 'horse']

console.log(
  `
const containsE = filter(includes('e'))
const animalsFilter = ['zebra', 'cat', 'dog', 'horse']

containsE(animalsFilter) => `,
  containsE(animalsFilter)
) // => ['zebra', 'horse']
