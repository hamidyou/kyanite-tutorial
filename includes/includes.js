const { includes } = require('kyanite')

// Examples

//  ** Array of numbers **

includes(13, [1, 2, 3, 5, 8, 13, 21]) // => true

includes('13', [1, 2, 3, 5, 8, 13, 21]) // => false because the value is a string and the array does not contain the 'string' 13.

//  ** Array of strings and mixed types **

includes('Ameer', ['Jane', 'Zayne', 'Wayne', 'Shane']) // => false

includes(54, ['Jane', 5, 'Zayne', 'Ameer', 54, 'Shane']) // => true
