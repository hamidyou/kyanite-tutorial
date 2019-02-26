# Kyanite.reduce()

## What does it do
`Kyanite.reduce()` accepts an array and runs a reduce based on the passed values

It also acts as a transducer in part, and accepts a `reduced` function to short circuit the reduce loop.

## Syntax
```js
reduce(fn, init, list)
```

## Parameters & Return
- `fn(n, acc)`
	- function that takes 2 parameters
		- `n` is the value being passed into the function (an element of the list)
		- `acc` is the accumulator
	- returns `any` data type as defined by the final function in the list
- `init`
	- initial value of the accumulator
- `list`
	- array
	- data to run reduce against
- return
	- `any` data type as defined by `fn`



## Examples

**Sum of an array of numbers**
```js
k.reduce((n, acc) => acc + n, 0, [1,3,4,7]) // => 15
```

- `acc` starts at 0.
- 1 is passed in as `n` and added to `acc`, `acc` = 1
- 3 is passed in as `n` and added to `acc`, `acc` = 4
- 4 is passed in as `n` and added to `acc`, `acc`= 8
- 7 is passed in as `n` and added to `acc`, `acc`= 15


**Using reduce to filter out items of a list**
```js
k.reduce((n, acc) => {
	if (typeof n === 'number') {
		acc.push(n)
	}
	return acc
}, [], ['', 1, 2, '0', 3]) // => [1, 2, 3]
```

- `acc` starts as `[]`
- `' '` is passed to `n` and it doesn't meet the condition, `acc = []`
- `1` is passed to `n` and passes the condition therefore it is added to `acc`, `acc = [1]`
- `2` is passed to `n` and passes the condition therefore it is added to `acc`, `acc = [1, 2]`
- `'0'` is passed to `n` and does not pass the condition `acc = [1, 2]`
- `3` is passed to `n` and passes the condition therefore it is added to `acc`, `acc = [1, 2, 3]`
