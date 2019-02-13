const { add, reduce } = require('kyanite')

// Examples

reduce(add, 0, [1, 3, 4, 7]) // => 15

reduce((acc, n) => {
  if (typeof n === 'number') {
    acc.push(n)
  }

  return acc
}, [], ['', 1, 2, '0', 3]) // => [1, 2, 3]
