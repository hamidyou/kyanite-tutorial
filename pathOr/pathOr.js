const { path, pathOr, reduce, concat } = require('kyanite')

// Examples
const userObject = {
  name: {
    firstName: 'Will',
    lastName: 'Smith'
  }
}

console.log(
  "path(['name', 'middleName'], userObject) => ",
  path(['name', 'middleName'], userObject)
)

console.log('-----------------------------------------------------------')

console.log(
  "pathOr('No Middle Name', ['name', 'middleName'], userObject) => ",
  pathOr('No Middle Name', ['name', 'middleName'], userObject)
)

const userArray = [
  {
    name: {
      firstName: 'Will',
      lastName: 'Smith'
    }
  },
  {
    name: {
      firstName: 'Tommy',
      middleName: 'Lee',
      lastName: 'Jones'
    }
  },
  {
    name: {
      firstName: 'Hillary',
      middleName: 'Rodham',
      lastName: 'Clinton'
    }
  }
]

console.log('-----------------------------------------------------------')

console.log(
  reduce(
    (el, acc) => {
      const middle = pathOr('N/A', ['name', 'middleName'], el)
      if (middle !== 'N/A') {
        return concat(middle, acc)
      }
      return acc
    },
    [],
    userArray
  )
)

console.log('-----------------------------------------------------------')

console.log(
  reduce(
    (el, acc) => {
      const middle = path(['name', 'middleName'], el)
      return concat(middle, acc)
    },

    [],
    userArray
  )
)
