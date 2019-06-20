const { add, reduce, concat, map } = require('kyanite')

// Examples

reduce(add, 0, [1, 3, 4, 7]) // => 15

console.log('reduce(add, 0, [1, 3, 4, 7]) => ', reduce(add, 0, [1, 3, 4, 7]))

console.log(
  reduce(
    (n, acc) => {
      if (typeof n === 'number') {
        return concat(n, acc)
      }

      return acc
    },
    [],
    ['', 1, 2, '0', 3]
  )
) // => [1, 2, 3]
