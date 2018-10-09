# Kyanite.reverse()

## What does it do
Kyanite.reverse() accepts an array and returns a brand new reversed array

## Syntax
```js
reverse(list) => new array
```

## Parameters & Return
- `list`
	- `array` or `string`

- return
	- new array list in reverse

## Examples

```js
k.reverse([1,2,3]) // => [3, 2, 1]

const animals = ['zebra', 'horse', 'cat', 'dog']
k.reverse(animals) // => ['dog', 'cat', 'horse', 'zebra']

k.reverse('string') // => 'gnirts'
```

  

Curried & Piped Examples

```js
k.pipe([
    k.filter(x => k.pow(2,x) >= 10),
    k.reverse
], [2, 4, 6, 8]) // => [8, 6, 4]
```