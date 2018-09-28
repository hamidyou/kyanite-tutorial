const k = require('kyanite/dist/kyanite')

// Examples

k.map(x => x + 1, [1, 2, 3]) // => [2,3,4]

const square = x => k.pow(2, 2)
k.map(square, [2, 4, 6, 8]) // => [4,16,36,64]

const plural = x => x + 's'
const animals = ['zebra', 'horse', 'cat', 'dog']
k.map(plural, animals) // => ['zebras', 'horses', 'cats', 'dogs']

// Curried Examples

const mapper = k.map(x => x + 1)
mapper([1, 2, 3]) // => [2,3,4]

const squareMap = k.map(x => k.pow(2, 2))
squareMap([2, 4, 6, 8]) // => [4,16,36,64]

const pluralMap = k.map(x => x + 's')
const animalsSingle = ['zebra', 'horse', 'cat', 'dog']
pluralMap(animalsSingle) // => ['zebras', 'horses', 'cats', 'dogs']
