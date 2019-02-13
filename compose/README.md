# Kyanite.compose()

## What does it do
Kyanite.compose() applies a value through two functions, from right to left.

## Syntax
```js
compose(fn2, fn1, data) => // any data type, depending on the final function in the list
```

## Parameters & Return
- fn2
	- function
	- the 2nd function to apply to the reseult of the 1st function
	- returns `any` data type as defined by the final function in the list
- fn1
	- function
	- the 1st function to run against the data
	- returns `any` data type as defined by the final function in the list
- return
	- `any` data type
	- the composed value of `a`
	
  

## Examples

**Simple math with k.compose()**
```js
k.compose(Math.sqrt, x => x + 1, 99) // => 100

k.compose(k.isOdd, x => k.pow(3), 3) // => true
```

**Transforming a list**

Find all of the squares for integers from 1 - 20 that are evenly divisible by 3.
```js
// Create an array of numbers from 1 - 20.
const numArray3 = k.range(1, 21)

// Use compose to transform array
console.log(k.compose(k.filter(x => k.rem(3, x) === 0), k.map(k.pow(2)), numArray3)) // => [ 9, 36, 81, 144, 225, 324 ]
```
