/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/


// The simple solution:

// Cycle through numbers 1 through 100
for (let num = 1; num <= 100; num++) {
    // Check if number is divisible by both 3 and 5
    if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {  // Check if number is divisble by 3
        console.log("Fizz");
    }
    else if (num % 5 === 0) { // Check if number is divisble by 5
        console.log("Buzz");
    }
    else {  // All other numbers
        console.log(num);
    }
}



// The clever solution:
for (let num = 1; num <= 100; num++) {
    let output = "";    // Holds the string output

    // Check if num divisible by 3
    if (num % 3 === 0) {
        output += "Fizz";   // Concat "Fizz" to output variable
    }

    // Check if num divisible by 5
    if (num % 5 === 0) {
        output += "Buzz";   // Concat "Buzz" to output variable
    }

    // Print either the string output or the number
    console.log(output || num);
}