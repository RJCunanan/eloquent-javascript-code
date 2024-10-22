/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/


// My simple solution:

// Variable to hold chessboard string output
let output = "";
let bindingSize = 8;

for (let row = 0; row < bindingSize; row++) {
    // Check if it is an even-numbered row
    if (row % 2 === 0) {
        for (let col = 0; col < bindingSize; col++) {
            // Check if it is an even-numbered column
            if (col % 2 === 0) {
                output += "#";
            }
            else {  // Check if it is an odd-numbered column
                output += " ";
            }
        }
    }
    else {  // Check if it is an odd-numbered row
        for (let col = 0; col < bindingSize; col++) {
            // Check if it is an even-numbered column
            if (col % 2 === 0) {
                output += " ";
            }
            else {  // Check if it is an odd-numbered column
                output += "#";
            }
        }
    }

    // Start printing the next row
    output += "\n";
}

// Print out the chessboard
console.log(output);



