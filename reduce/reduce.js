const k = require('kyanite/dist/kyanite')

// Examples

k.reduce((acc, n) => acc + n, 0, [1, 3, 4, 7]) // => 15

k.reduce((acc, n) => {
  if (typeof n === 'number') {
    acc.push(n)
  }

  return acc
}, [], ['', 1, 2, '0', 3]) // => [1, 2, 3]
