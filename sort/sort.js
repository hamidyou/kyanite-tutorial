const { ascend, descend, sort } = require('kyanite')

// Examples

console.log(sort(ascend, [3, 4, 6, 5, 2, 1, 8, 9, 7])) // => [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(sort(descend, [3, 4, 6, 5, 2, 1, 8, 9, 7])) // => [9, 8, 7, 6, 5, 4, 3, 2, 1]
