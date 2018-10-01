
  

# Kyanite.filter()

  

  

## What does it do

  

Kyanite.filter() filters through a filterable data piece - `array` - using the provided function.

  

## Syntax

  

    filter(fn, list) => new array

## Parameters & Return
- fn
	- function
	- the function to run against every element of the `list`
	- returns element  - of `any` data type as defined by the function - of new array
- list
	- array
	- the list to iterate through and pass to `fn`
- return
	- new array list with only the elements that satisfy the conditions of fn
	
  

## Examples

Examples

    k.filter(x => x > 1, [1,2,3]) // => [2,3]
    
    const divBy4 = x => k.rem(4,x) === 0
    k.filter(divBy4, [2,4,6,8]) // => [4,8]
    
    const a = x => k.includes('a')
    const animals = ['zebra', 'horse', 'cat', 'dog']
    k.filter(a, animals) // => ['zebras', 'cats']
  

Curried Examples

    
    const filterer = k.filter(x => x + 1 <= 2)
    filterer([1,2,3]) // => [1]
    
    const doubleDigitSquare = k.filter(x => k.pow(2,x) >= 10)
    doubleDigitSquare([2,4,6,8]) // => [4,6,8]
    
    const containsE = k.filter(x => k.includes('e', x))
    const animals = ['zebra', 'horse', 'cat', 'dog']
    containsE(animals) // => ['zebras', 'horses']
