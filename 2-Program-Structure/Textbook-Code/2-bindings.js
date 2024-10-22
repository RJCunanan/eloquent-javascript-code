// Bindings

/*
"binding" or "variable" - a way to catch and hold values in JS
*/

let caught = 5 * 5;

/*
The keyword "let" indicates that this sentence is going to define a
binding. It is fallowed by the name of the binding and, if we want to
immediately give it a vlue, by an "=" operator and an expression.

After a binding has been defined, its name can be used as an expression.
The value of such an expression is the value the binding currently holds.
*/

let ten = 10;
console.log(ten * ten); // 100

/*
The "=" operator can be used at any time on existing bindings to disconnect
them from their current value and have them point to a new one.
*/

let mood = "light";
console.log(mood);  // light

mood = "dark";
console.log(mood);  // dark

/*
You should imagine bindings as tentacles, rather than boxes. They do not
"contain" values; they "grasp" them - two bindings can refer to the same
value.
*/

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);    // 105

/*
When you define a binding without giving it a vlue, the tentacle has
nothing to grasp, so it ends in thin air. If you ask for the value of
an empty binding, you'll get the value "undefined".

A single "let" statement may define multiple bindings. The definitions
must be separated by commas.
*/

let one = 1, two = 2;
console.log(one + two); // 3

/*
The words "var" and "const" can also be used to create bindings, in a way
similar to "let".
*/

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);   // Hello Ayda

/*
The word "var" (short for variable) is the way bindings were declare in pre-2015
JS. For now, remember it mostly does the same thing, but we'll rarely use it
in this book because it has some confusing properties

The word "const" stands for "constant". It defines a constant binding which
points at the same value for as long as it lives.
*/