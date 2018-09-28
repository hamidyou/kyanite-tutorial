
  

# Kyanite.map()

  

  

## What does it do

  

Kyanite.map() takes a function and applies it to all of the values within the provided list, and brings back a new list of the same type.

  

## Syntax

  

    map(fn, list) => new list with each element transformed according to fn()

  

  

## Parameters & Return
- fn
	- function
	- the function to run against every element of the `list`
	- returns element  - of `any` data type as defined by the function - of new array
- list
	- array
	- the list to iterate through and pass to `fn`
- return
	- new array
	
  

## Examples

Examples

    k.map(x => x + 1, [1,2,3]) // => [2,3,4]
    
    const square = x => k.pow(2,2)
    k.map(square, [2,4,6,8]) // => [4,16,36,64]
    
    const plural = x => x + 's'
    const animals = ['zebra', 'horse', 'cat', 'dog']
    k.map(plural, animals) // => ['zebras', 'horses', 'cats', 'dogs']
  

Curried Examples

    
    const mapper = k.map(x => x + 1)
    mapper([1,2,3]) // => [2,3,4]
    
    const square = k.map(x => k.pow(2,2))
    square([2,4,6,8]) // => [4,16,36,64]
    
    const plural = k.map(x => x + 's')
    const animals = ['zebra', 'horse', 'cat', 'dog']
    plural(animals) // => ['zebras', 'horses', 'cats', 'dogs']
