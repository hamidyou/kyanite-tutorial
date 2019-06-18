const { concat, map } = require('kyanite')

// Examples

console.log('concat([4, 5, 6], [1, 2, 3]) => ', concat([4, 5, 6], [1, 2, 3])) // => [1, 2, 3, 4, 5, 6]

console.log("concat('ue', 'val') => ", concat('ue', 'val')) // => 'value'

console.log("map(concat('s'), 'hello') => ", map(concat('s'), 'hello')) // => ['hs', 'es', 'ls', 'ls', 'os']
