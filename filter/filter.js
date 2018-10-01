const k = require('kyanite/dist/kyanite')

// Examples

k.filter(x => x > 1, [1, 2, 3]) // => [2,3]

const divBy4 = x => k.rem(4, x) === 0
k.filter(divBy4, [2, 4, 6, 8]) // => [4,8]

const a = x => k.includes('a')
const animals = ['zebra', 'horse', 'cat', 'dog']
k.filter(a, animals) // => ['zebra', 'cat']

// Curried Examples

const filterer = k.filter(x => x + 1 <= 2)
filterer([1, 2, 3]) // => [1]

const doubleDigitSquare = k.filter(x => k.pow(2, x) >= 10)
doubleDigitSquare([2, 4, 6, 8]) // => [4,6,8]

const containsE = k.filter(x => k.includes('e', x))
const animalsFilter = ['zebra', 'horse', 'cat', 'dog']
containsE(animalsFilter) // => ['zebra', 'horse']

const applicants = {
  applicant1: {
    name: 'Avery',
    age: 25,
    gender: 'female',
    regParty: 'Republican',
    votedFor: 'Trump',
    yearsExperience: 2
  },
  applicant2: {
    name: 'Bryan',
    age: 52,
    gender: 'male',
    regParty: 'Republican',
    votedFor: 'Clinton',
    yearsExperience: 15
  },
  applicant3: {
    name: 'Chris',
    age: 44,
    gender: 'female',
    regParty: 'Democrat',
    votedFor: '',
    yearsExperience: 3
  },
  applicant4: {
    name: 'Dayle',
    age: 34,
    gender: 'female',
    regParty: 'Democrat',
    votedFor: 'Trump',
    yearsExperience: 1
  },
  applicant5: {
    name: 'Emily',
    age: 18,
    gender: 'female',
    regParty: 'Democrat',
    votedFor: 'Clinton',
    yearsExperience: 0
  },
  applicant6: {
    name: 'Francis',
    age: 72,
    gender: 'male',
    regParty: 'Republican',
    votedFor: '',
    yearsExperience: 35
  },
  applicant7: {
    name: 'George',
    age: 20,
    gender: 'male',
    regParty: 'Republican',
    votedFor: 'Trump',
    yearsExperience: 2
  },
  applicant8: {
    name: 'Heather',
    age: 28,
    gender: 'female',
    regParty: 'Democrat',
    votedFor: 'Clinton',
    yearsExperience: 6
  },
  applicant9: {
    name: 'Joseph',
    age: 36,
    gender: 'male',
    regParty: 'Democrat',
    votedFor: 'Clinton',
    yearsExperience: 5
  }
}

console.log(k.map(k.omit(['gender', 'age', 'regParty', 'votedFor']), applicants))
// k.pipe([
//   k.omit(['gender', 'age', 'regParty', 'votedFor']),
//   k.sort(k.descendBy(x => x.yearsExperience)),
//   k.filter(x => x.yearsExperience >= 5),
//   k.map(x => console.log(x.name + ' has ' + x.yearsExperience + ' years of experience.'))
// ], applicants)
