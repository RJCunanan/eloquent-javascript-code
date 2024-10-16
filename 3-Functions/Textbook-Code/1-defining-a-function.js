/*
Function definition - a regular binding where the value of the 
binding is a function.

The code below defines "square" to refer to a function that produces
the square of a given number
*/

const square = function(x) {
    return x * x;
};
console.log(square(12));    // 144

/*
A function is created with the "function" keyword.

Functions have a set of "parameters" and a "body" that contain statements
to be executed when the function is called. The body must always be wrapped
in braces, even when it consists of only a single statement.

A function can have multiple parameters or none at all.
*/

// No parameters:
const makeNoise = function() {
    console.log("Pling!");
};
makeNoise();    // Pling!

// Two parameters:
// Rounds "n" to the nearest multiple of "step"
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));   // 20

/*
Some functions produce a value while others just reuslt in a side effect.

A "return" statement determines the value the function returns. When control
comes accross a return statement, it immediately jumps out of the current
function and gives the returned value to the code that called the function.
A return keyword without an expression after it will cause the function to
return "undefined". Functions that don't have a return statment at all also
return "undefined".

Function parameters behave like regular bindings, but their initial values
are given by the "caller" of the funciton, not the code in the function
itself.
*/