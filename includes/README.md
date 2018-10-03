
  

# Kyanite.includes()

  

  

## What does it do

  

Kyanite.includes() checks to see if the provided list contains at least 1 of the provided value within it.

## Syntax

    includes(value, list) => Boolean

## Parameters & Return
- `value`
	- `any` type
	- the value to search the list for
- `list`
	- `array` or `string` to be searched
- return
	- Boolean: `true` if `list` includes `value`, `false` if not.`
	
  

## Examples

**Array of numbers**

	k.includes(13, [1,2,3,5,8,13,21]) // => true
	
	k.includes('13', [1,2,3,5,8,13,21]) // => false because the value is a string and the array does not contain the 'string' 13.
	
**Array of strings and mixed types**

	k.includes('Ameer', ['Jane', 'Zayne', 'Wayne', 'Shane']) // => false
	
	k.includes(54, ['Jane', 5, 'Zayne', 'Ameer', 54, 'Shane']) // => true
    
