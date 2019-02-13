const { compose, reverse, pipe, filter, pow, gte } = require('kyanite')

// Examples

reverse([1, 2, 3]) // => [3, 2, 1]

const animals = ['zebra', 'horse', 'cat', 'dog']
reverse(animals) // => ['dog', 'cat', 'horse', 'zebra']

reverse('string') // => 'gnirts'

// Curried & Piped Examples

console.log(pipe([
  filter(compose(gte(10), pow(2))),
  reverse
], [2, 4, 6, 8])) // => [8, 6, 4]
