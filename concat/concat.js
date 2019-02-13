const { concat, map } = require('kyanite/dist/kyanite')

// Examples

console.log(concat([4, 5, 6], [1, 2, 3])) // => [1, 2, 3, 4, 5, 6]

console.log(concat('ue', 'val')) // => 'value'

console.log(map(concat('s'), 'hello')) // => ['hs', 'es', 'ls', 'ls', 'os']
