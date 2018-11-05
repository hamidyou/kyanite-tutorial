const k = require('kyanite/dist/kyanite')

// Examples

k.sort((x, y) => x - y, [3, 4, 6, 5, 2, 1, 8, 9, 7]) // => [1, 2, 3, 4, 5, 6, 7, 8, 9]

k.sort((x, y) => y - x, [3, 4, 6, 5, 2, 1, 8, 9, 7]) // => [9, 8, 7, 6, 5, 4, 3, 2, 1]
