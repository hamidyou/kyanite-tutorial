const { add, concat, map, pow } = require('kyanite')

const animals = ['zebra', 'horse', 'cat', 'dog']

// Examples

console.log(map(add(1), [1, 2, 3])) // => [2, 3, 4]

console.log(map(pow(2), [2, 4, 6, 8])) // => [4, 16, 36, 64]

console.log(map(concat('s'), animals)) // => ['zebras', 'horses', 'cats', 'dogs']

// Curried Examples

const mapper = map(add(1))

console.log(mapper([1, 2, 3])) // => [2, 3, 4]

const squareMap = map(pow(2))

console.log(squareMap([2, 4, 6, 8])) // => [4, 16, 36, 64]

const pluralMap = map(concat('s'))

console.log(pluralMap(animals)) // => ['zebras', 'horses', 'cats', 'dogs']
