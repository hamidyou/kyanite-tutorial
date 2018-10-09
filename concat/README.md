# Kyanite.concat()

## What does it do
Kyanite.concat() takes an array (with a length > 1) and concats the values into a new array.

## Syntax
```js
concat(arr) => array
```

## Parameters & Return
- arr
	- array w/ length > 1
	- returns single array w/ all values

  

## Examples
```js
k.concat([[1,2,3], [4,5,6]]) => [1,2,3,4,5,6]

k.concat([1,2,3], 4) => [1,2,3,4]

k.concat([[1,2], ['a','b','c'], 5]) => [1,2,'a','b','c',5]
```
