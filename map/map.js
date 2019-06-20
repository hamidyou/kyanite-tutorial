const { add, concat, map, pow } = require('kyanite')

const animals = ['zebra', 'horse', 'cat', 'dog']

// Examples

console.log('map(add(1), [1, 2, 3]) => ', map(add(1), [1, 2, 3])) // => [2, 3, 4]

console.log('map(pow(2), [2, 4, 6, 8]) => ', map(pow(2), [2, 4, 6, 8])) // => [4, 16, 36, 64]

console.log("map(concat('s'), animals) => ", map(concat('s'), animals)) // => ['zebras', 'horses', 'cats', 'dogs']

// Curried Examples

const mapper = map(add(1))

console.log(
  `
const mapper = map(add(1))
mapper([1, 2, 3] => `,
  mapper([1, 2, 3])
) // => [2, 3, 4]

const squareMap = map(pow(2))

console.log(
  `
const squareMap = map(pow(2))
squareMap([2, 4, 6, 8]) => `,
  squareMap([2, 4, 6, 8])
) // => [4, 16, 36, 64]

const pluralMap = map(concat('s'))

console.log(
  `
const pluralMap = map(concat('s'))
pluralMap(animals) => `,
  pluralMap(animals)
) // => ['zebras', 'horses', 'cats', 'dogs']
