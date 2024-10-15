/*
Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.
*/


let text = "'I'm the cook,' he said, 'it's my job.'";

/*
Single quotes (') that need to be replaced:
- the ' at the very beginning of the string
- a non-word character followed by a '
- a ' followed by a non-word character
- the ' at the very end of the string
*/
let regexp = /^'|(\P{L})'|('\P{L})|'$/gu;

console.log("1:", text.replace(regexp, "$1\"$2"));
// → "I'm the cook," he said, "it's my job."


// Other tests:
let text2 = "But he began by saying, 'I refuse to do so...'";
console.log("2:", text2.replace(regexp, "$1\"$2"));