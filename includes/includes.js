const { includes } = require('kyanite')

// Examples

//  ** Array of numbers **

includes(13, [1, 2, 3, 5, 8, 13, 21]) // => true

console.log(
  'includes(13, [1, 2, 3, 5, 8, 13, 21]) => ',
  includes(13, [1, 2, 3, 5, 8, 13, 21])
)

includes('13', [1, 2, 3, 5, 8, 13, 21]) // => false because the value is a string and the array does not contain the 'string' 13.

console.log(
  "includes('13', [1, 2, 3, 5, 8, 13, 21]) => ",
  includes('13', [1, 2, 3, 5, 8, 13, 21])
)

//  ** Array of strings and mixed types **

includes('Ameer', ['Jane', 'Zayne', 'Wayne', 'Shane']) // => false

console.log(
  "includes('Ameer', ['Jane', 'Zayne', 'Wayne', 'Shane']) => ",
  includes('Ameer', ['Jane', 'Zayne', 'Wayne', 'Shane'])
)

includes(54, ['Jane', 5, 'Zayne', 'Ameer', 54, 'Shane']) // => true

console.log(
  "includes(54, ['Jane', 5, 'Zayne', 'Ameer', 54, 'Shane']) => ",
  includes(54, ['Jane', 5, 'Zayne', 'Ameer', 54, 'Shane'])
)
