const k = require('kyanite/dist/kyanite')

// Examples

//  ** Array of numbers **

k.includes(13, [1, 2, 3, 5, 8, 13, 21]) // => true

k.includes('13', [1, 2, 3, 5, 8, 13, 21]) // => false because the value is a string and the array does not contain the 'string' 13.

//  ** Array of strings and mixed types **

k.includes('Ameer', ['Jane', 'Zayne', 'Wayne', 'Shane']) // => false

k.includes(54, ['Jane', 5, 'Zayne', 'Ameer', 54, 'Shane']) // => true
