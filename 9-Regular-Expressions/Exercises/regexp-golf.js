/*
Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern and only that pattern.

For each of the following items, write a regular expression to test whether the given pattern occurs in a string. The regular expression should match only strings containing the pattern. When your expression works, see whether you can make it any smaller.

1. car and cat

2. pop and prop

3. ferret, ferry, and ferrari

4. Any word ending in ious

5. A whitespace character followed by a period, comma, colon, or semicolon

6. A word longer than six letters

7. A word without the letter e (or E)

Refer to the table in the chapter summary for help. Test each solution with a few test strings.
*/


// Fill in the regular expressions

verify(/.../,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(/.../,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/.../,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(/.../,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/.../,
    ["bad punctuation ."],
    ["escape the period"]);

verify(/.../,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

verify(/.../,
    ["red platypus", "wobbling nest"],
    ["earth bed", "bedrøvet abe", "BEET"]);


function verify(regexp, yes, no) {
    // Ignore unfinished exercises
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)) {
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)) {
        console.log(`Unexpected match for '${str}'`);
    }
}