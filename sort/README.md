# Kyanite.sort()

## What does it do
Kyanite.sort() uses a comparison function to sort an array
  

## Syntax
```js
sort(fn, a) => [sortedArray]
```

## Parameters & Return
- `fn(x, y)`
	- function that takes 2 parameters
		- `x` and `y` represent the relationship between two items in the area to compare for sorting
- `a`
	- array to get sorted
- return
	- sorted `array`

## Examples

**Sort an array of numbers, ascending**
```js
k.sort((x, y) => x - y, [3, 4, 6, 5, 2, 1, 8, 9, 7]) // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
**Sort an array of numbers, descending**
```js
k.sort((x, y) => y - x, [3, 4, 6, 5, 2, 1, 8, 9, 7]) // => [9, 8, 7, 6, 5, 4, 3, 2, 1]
```