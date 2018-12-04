const k = require('kyanite/dist/kyanite')

const arr = k.concat(8768, k.range(1, 10000))

const findDuplicates = arr => k.compose(k.sift(x => x.length > 1), k.groupBy(Math.floor), arr)

console.log(findDuplicates(arr))
