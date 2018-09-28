const k = require('kyanite/dist/kyanite')

// Examples

k.concat([[1, 2, 3], [4, 5, 6]]) // => [1, 2, 3, 4, 5, 6]

k.concat([1, 2, 3], 4) // => [1, 2, 3, 4]

k.concat([[1, 2], ['a', 'b', 'c'], 5]) // => [1, 2, 'a', 'b', 'c', 5]
