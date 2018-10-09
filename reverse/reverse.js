const k = require('kyanite/dist/kyanite')

// Examples

k.reverse([1, 2, 3]) // => [3, 2, 1]

const animals = ['zebra', 'horse', 'cat', 'dog']
k.reverse(animals) // => ['dog', 'cat', 'horse', 'zebra']

k.reverse('string') // => 'gnirts'

// Curried & Piped Examples

k.pipe([
  k.filter(x => k.pow(2, x) >= 10),
  k.reverse
], [2, 4, 6, 8]) // => [8, 6, 4]
