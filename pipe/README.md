
  

# Kyanite.pipe()

  

  

## What does it do

  

Kyanite.pipe() applies a sequence of transformations over a value.

*Note: before proceeding, it will be beneficial to already have experience with the other Kyanite functions included in the examples.

  

## Syntax

    pipe(list, a) => // any data type, depending on the final function in the list

## Parameters & Return
- list
	- array of functions
	- functions should be listed in order of how you want them run
	- returns `any` data type as defined by the final function in the list
- a
	- value or data to pass through the pipe`
- return
	- `any` data type
	- the transformed value of `a`
	
  

## Examples

Visualization

value --> fn @ list[0] => fn @ list[1] ... => fn @ list[n] => transformed value

**Simple math with k.pipe()**

 each function is curried. It has been given it's first parameter and is waiting for the function before it to pass it a value for it's second parameter

	k.pipe([
		k.add(1), // => 4 -->
		k.mul(4), // => 16 -->
		k.div(2), // => 8 -->
		k.pow(2) // => 64
	], 3) // => 64
    
**Simple math without k.pipe()**
	
	k.pow(2, k.div(2, k.mul(4, k.add(1,3)))) // => 64
OR
		

    k.add(1,3) => 4
	k.mul(4,4) => 16
 	k.div(2,16) => 8
	k.pow(2,8) => 64 
	
  

**Transforming a list**

Find all the sum of all squares for integers from 1 - 20 that are evenly divisible by 3.

    //Create an array of numbers from 1 - 20.
    const numArray = k.range(1,21)
    
    //Create pipe of curried functions to transform array
    k.pipe([
	    k.map(x => k.pow(2, x)), // loop through the array and return a NEW array of all the squares of the numbers in the original array
	    k.filter(x => k.rem(3, x) === 0), // loop through the array created by k.map() and return a NEW array of all the even numbers
	    k.reduce((acc, n) => acc + n, 0) // loop through the array created by k.filter() and return the sum of all the numbers 
	], numArray) // => 819

**Transforming a list using variables for functions**

Find all the sum of all squares for integers from 1 - 20 that are evenly divisible by 3.
    
    //Create an array of numbers from 1 - 20.
    const numArray = k.range(1,21)//Create pipe of curried functions to transform array
    
    //Create a function to create an array of squares.
    const squares = x => k.pow(2, x)
    
	//Create a function to filter down to all even squares
	const divBy3 = x => k.rem(3, x) === 0
	
	//Create a function to add all the numbers
	const sum = x => k.reduce((acc,n) => acc + n, 0, x) 
	
    k.pipe([
	    squares,
	    divBy3,
	    sum
	], numArray) // => 819
