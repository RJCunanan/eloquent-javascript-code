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

let output = "";    // Variable to hold chessboard string output
let bindingSize = 8;    // Determins size of chessboard

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

    // Start the next row
    output += "\n";
}

// Print out the chessboard
console.log(output);



/******************************************************************/



// My more optimized solution:

let output2 = "";    // Variable to hold chessboard string output
let bindingSize2 = 5;    // Determins size of chessboard

for (let row = 0; row < bindingSize2; row++) {
    for (let col = 0; col < bindingSize2; col++) {
        if ((row + col) % 2 === 0) {
            output2 += " ";
        }
        else {
            output2 += "#";
        }
    }

    // Start the next row
    output2 += "\n";
}

// Print out the chessboard
console.log(output2);