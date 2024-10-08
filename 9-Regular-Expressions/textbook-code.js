// Two ways to create a regex object:
let regex1 = new RegExp("abc");     // Using RegExp constructor
let regex2 = /abc/;     // Writing a literal value enclosed in forward slashes (/)


// Some characters like question marks and plus signs have special meanings in
// regex and must be preceded by a backslash to represent the character itself:
let eighteenPlus = /eighteen\+/;


// Testing for Matches:

// .test() method: pass in a string, returns a boolean
console.log("1:", /abc/.test("abcde"));   // true
console.log("2:", /abc/.test("abxde"));   // false



// Sets of Characters:

// Anything between the square brakets will be looked for.

// Both of the following will match all strings containing a digit:
console.log("3:", /[0123456789]/.test("in 1992"));    // true
console.log("4:", /[0-9]/.test("in 1992"));   // true


/* 
Note: the hyphen(-) between two characters can be used to indicate a range
of characters where the order is determined by the character's Unicode number
*/


/*
Built-in shortcuts for common character groups:

\d -> Any digit character
\w -> An alphanumeric character ("word character")
\s -> Whitespace character (space, tab, newline, and similar)
\D -> Character that is NOT a digit
\W -> Nonalphanumeric character
\S -> Nonwhitespace character
. -> Any character except for newline
*/


// Example: Match a date and time format
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log("5:", dateTime.test("01-30-2003 15:20"));   // true
console.log("6:", dateTime.test("30-jan-2003 15:20"));    // false


// To "invert" a set of characters - that is, to match any character
// EXCEPT the ones in the set - use a caret (^) after the opening
// square bracket.
let notBinary = /[^01]/;   // pattern that doesn't contain 0s or 1s
console.log("7:", notBinary.test("1100100010100110")); // false
console.log("8:", notBinary.test("1100100010200110"));  // true



// International Characters:

//  JS's regex are rather dumb about characters that do not appear in the
// English language. For example, JS's "word character" regex is only one
// of the 26 characters in the latin alphabet (uppercase or lowercase),
// decimal digits, and, for some reason, the underscore character.

// It is possible to use \p in a regex to match all characters to which
// the Unicode standard assigns a given property. This lets us match things
// like letters in a more cosmopolitan way.

// However, du to compatibility with original language standards, these are
// recognized only when you put a "u" character (for Unicode) after the regex.

/*
\p{L} -> Any letter
\p{N} -> Any numeric character
\p{P} -> Any punctuation character
\P{L} -> Any nonletter (uppercase P inverts)
\p{Script=Hangul} ->Any character from the given script (see Ch.5)
*/

// Using \w for text processing that may need to handle non-English text
// or characters is a liability. Though more verbose, \p propert groups
// are more robust.
console.log("Int. Chars.:", /\p{L}/u.test("α"));    // true
console.log("Int. Chars.:", /\p{L}/u.test("!"));    // false
console.log("Int. Chars.:", /\p{Script=Greek}/u.test("α")); // true
console.log("Int. Chars.:", /\p{Script=Arabic}/u.test("α"));    // false

// On the other hand, if you are matching numbers to do something with
// them, you want to use \d for digits, since converting converting
// arbitrary numeric characters into a JS number is not something a function
// like "Number" can do for you.



// Repeating Parts of a Pattern:

// What if we want to match a whole number - a sequence of one or more digits?
// Putting a plus sign (+) after something in a regex indicates that the element
// may be repeaded more than once. Thus, /\d+/ matches one or more digit characters.
console.log("9:", /'\d+'/.test("'123'"));    // true
console.log("10:", /'\d+'/.test("''"));  // false

// The star (*) is similar but also allows the patern to match zero times.
console.log("11:", /'\d*'/.test("'123'"));  // true
console.log("12:", /'\d*'/.test("''")); // true


// A question mark (?) makes part of a pattern optional - it can occure zero
// times or one time.

// Example: the "u" character is optional
let neighbor = /neighbou?r/;
console.log("13:", neighbor.test("neighbour")); // true
console.log("14:", neighbor.test("neighbor"));  // true


// To indicate a pattern should occure a precise number of times, use
// braces ({}).
// {4} -> must occure exactly four times
// {2,4} -> range: must occur at least twice, at most four times

// New date and time pattern:
let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log("15:", dateTime2.test("1-30-2003 8:45"));  // true

// Note: you can also specify open-ended ranges when using braces by omitting
// the number after the comma.
// {5,} -> means five or more times



// Grouping Subexpressions:

// Using an operator like * or + on more than one element at a time,
// surround it with parentheses. The part of the regex that is in the 
// parentheses counts as a single element for the operators.
let cartoonCrying = /boo+(hoo+)+/i;
console.log("16:", cartoonCrying.test("Boohooooohoohoooo"));   // true

// Note: the i at the end of the expression makes this regex case insensitive.



// Matches and Groups:

// .exec() (execute) method will return null if no match found and
// returns an object with info about the match otherwise.
let match = /\d+/.exec("one two 100");
console.log("17:", match);  // ["100"]
console.log("17.2:", match.index);  // 8
console.log("17.3:", match.input);  // 'one two 100'

// .exec has an index property that tells us where in the string the
// match begins. The object returned is also an array of strings, whose
// first element is the string that was matched.

// String values have a match method that behaves similarly.
console.log("18:", "one two 100".match(/\d+/));    // ["100"]

// When a regex contains subexpressions grouped with parentheses, the text
// that matched those groups will also show up in the array. The whole match
// is always the first element. The next elements is the part matched by the
// first group (the one with the first opening parenthesis), then the second
// group, and so on.
let quotedText = /'([^']*)'/;
console.log("19:", quotedText.exec("she said 'hello'"));    // ["'hello'", "hello"]

// When a group does not end up being matched, it's position in the output
// array will hold "undefined".
// When a group is matched multiple times, only the last match ends up in
// the array.
console.log("20:", /bad(ly)?/.exec("bad")); // ["bad", undefined]
console.log("21:", /(\d)+/.exec("123"));    // ["123", "3"]

// Groups are useful for extracting parts of a string from the returned
// object by simply wrapping parentheses around the desired patterns.



// The Date Class:

// Can create a date object containing the current date and time:
console.log("22:", new Date());

// Can also create an object for a specific time:
console.log("23:", new Date(2009, 11, 9));
console.log("24:", new Date(2009, 11, 9, 12, 59, 59, 999));

// Note: JS uses convention where month numbers start at 0 (so December is 11)
// but day numbers start at 1. Be careful.

// Last 4 arguments (hours, minutes, seconds, milliseconds) are optional
// and are 0 when not given.

// Timestamps are stored as the number of milliseconds since 1970.
// the getTime() methods on a date object returns this number.
console.log("25:", new Date(2023, 11, 19).getTime());
console.log("26:", new Date(1702972800000));

// If you give the Date constructor a single argument, it is treated
// as a millisecond count.

// To get the current millisecond count, you can create a new Date object
// and call getTime() on it, or by calling the Date.now().

// Date objects provide methods such as getFullYear(), getMonth(), getDate(),
// getHours(), getMinutes(), and getSeconds() to extract components.

// Putting parentheses around the parts of the expression we are interested
// in, we can now create a date jobject from a string:
function getDate(string) {
    // Note: the underscore (_) is ignored and used to skip the full match
    // element in the array returned by exec().
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}
console.log("27:", getDate("1-30-2003"));



// Boundaries and Look-ahead:

// To enforce that a match must span the entire string, we can add the markers
// ^ and $. The ^ matches the start of the input string, while the $ matches
// the end.

/*
Examples:

/^\d+$/ -> matches a string consisting entirely of one or more digits

/^!/ -> matches any string that starts with an exclamation mark

/x^/ -> does not match any string (there cannot be an x before the start 
of the string).
*/

// If we want to make sure the date starts and ends on a word boundary, we
// use \b. A word boundary can by the start or end of the string or any
// point in the string that has a word character (as in \w) on one side and a
// nonword character on the other.
console.log("28:", /cat/.test("concatenate"));  // true
console.log("29:", /\bcat\b/.test("concatenate"));  // false

// Note: A boundary marker doesn't match an actual character. It just
// enforces that the regex matches only when a certain condition holds
// at the place where it appears in the pattern.

// Look-ahead provide a pattern and will make the match fail if the input
// doesn't match the pattern, but don't actually move the match position
// forward. They are written between (?= and )
console.log("30:", /a(?=e)/.exec("braeburn"));  // ["a"]
console.log("31:", /a(?! )/.exec("a b"))    // null

// The (?! ) expresses a negative look-ahead. Matches only if the pattern
// in the parentheses doesn't match.



// Choice Patterns:

// Say we want to know whether a piece of text contains not only a number but a 
// number followed by one of the words pig, cow, or chicken, or any of their 
// plural forms.

// The pipe character (|) denotes a choice between pattern to its left
// and the pattern to it's right.
let animalCount = /\d+ (pig|cow|chicken)s?/;
console.log("32:", animalCount.test("15 pigs"));    // true
console.log(animalCount.test("15 pugs"));   // false

// Parenthesis can limit the part of the pattern to which the pipe
// operator applies.



// The Replace Method:

// String values have a replace() method to replace part of a string with
// another string
console.log("33:", "papa".replace("p", "m"));  // "mapa"

// The 1st argument can be a regex where the first match of the regex gets replaced.
// When a "g" option (for global) is added after the regex, ALL matches in the string
// will be replaced.
console.log("34:", "Borobudur".replace(/[ou]/, "a"));   // "Barobudur"
console.log("35:", "Borobudur".replace(/[ou]/g, "a"));  // "Barabadar"

// The real power of using regex with replace() comes from being able to refer to
// matched groups in the replacement string.

// Say we have a big string containing the names of people, one name per line,
// in the format "Lastname, Firstname". If we want to swap these names and remove
// the comma to get a "Firstname Lastname" format, we can do the following:
console.log(
    "36:",
    "Liskov, Barbara\nMcCarthy, John\nMilner, Robin"
        .replace(/(\p{L}+), (\p{L}+)/gu, "$2 $1")
);
/*
Barbara Liskov
John McCarthy
Robin Milner
*/

// The $1 and $2 in the replacement string refer to the parenthesized groups
// in the pattern. $1 is replaced by the text that matched the first group,
//  $2 by the second, and so on, up to $9. The whole match can be referred
// to with $&.

// It is possible to pass a function - rather than a string - as the second
// argument to replace(). For each replacement, the function will be called
// with the matched groups (as well as the whole match) as arguments, and
// its return value will be inserted into the new string.

// Example:
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    console.log("match:", match);
    amount = Number(amount) - 1;
    if (amount == 1) {  // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log("37:", stock.replace(/(\d+) (\p{L}+)/gu, minusOne));
// no lemon, 1 cabbage, and 100 eggs

// This code takes a string, finds all occurrencs of a number followed by an
// alphanumeric word, and returns a string that has one less of every such
// quantity.

// The (\d+) group ends up as the "amount" argument to the function, and
// the (\p{L}+) grup gets bound to "unit". The function converts "amount"
// to a number - which always works since it matched \d+ earlier - and
// makes some adjustments in case there is only one or zero left.



// Greed:

// We can use replace() to write a function that removes all comments
// form a piece of JavaScript code. First attempt:
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log("38:", stripComments("1 + /* 2 */3")); // 1 + 3
console.log("39:", stripComments("x = 10;// ten!"));   // x = 10;
console.log("40:", stripComments("1 /* a */+/* b */ 1"));  // 1  1

// The part before the | operator matches two slash chars followed by
// any number of non-newline chars. The part for multiline comments,
// we use [^] (any char that is not in the empty set of chars) to match
// any char. We can't just use a period here becouse block comments can
// continue on a new line, and the period char does not match newline
// chars.

// But the output for the last line is wrong. Why?

// The [^]* part of the expression will first match as much as it can.
// In the example, the matcher first tries to match teh whole rest of
// the string and moves back from there. It will find an occurrence of
// */ after going back 4 chars and match that. This is not what we wanted.
// We want to match a single comment, not go all the way to the end of
// the code and find the end of the last block comment.

// Because of this behavior, we say that repetiton operators (+, *, ?, and {})
// are "greedy", meaning they match as much as they can and backtrack from there.
// If you put a questionmark after them (+?, *?, ??, {}?), they become nongreedy
// and start matching as little as possible, matching more only when the
// remaining patter does not fit the smaller match.

// By having the start match the smallest stretch of chars that brings us
// to a */, we consume only one block comment and nothing more.
function stripComments2(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
console.log("41:", stripComments2("1 /* a */+/* b */ 1"));  // 1 + 1

// Lots of bugs in regex programs can be traced to unintentially using 
// greedy operators where a nongreedy one would work better. When using
// a repetition operator, prefer the nongreedy variant.



// Dynamically Creating RegExp Objects:

// In some cases you may not know the exact pattern you need to match
// against when writing code. Say you want to test for the user's name
// in a piece of text. You can build up a string and use the RegExp
// constructor on that.
let name = "harry";
let regexp = new RegExp("(^|\\s)" + name + "($|\\s)", "gi");
console.log("42:", regexp.test("Harry is a dodgy character."));    // true

// When creating the \s part of the string, we have to use 2 backslashes
// because we are writing them in a normal string instead of a slash-enclosed
// regex. The second argument to the RegExp constructor contains the options
// for the regex - in this case "gi" for global and case insensitive.

// But what if the name is "dea+hl[]rd" because our user is a nerdy teen?
// That would result in a nonsensical regex that won't actually match the
// user's name.

// To work around this, we can add backslashes before any character that
// has a special meaning.
let name2 = "dea+hl[]rd";
let escaped = name2.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp2 = new RegExp("(^|\\s)" + escaped + "($|\\s)", "gi");
let text = "This dea+hl[]rd guy is super annoying.";
console.log("43:", regexp2.test(text)); // true



// The Search Method:

// While the indexOf() method on strings cannot be called on a regex,
// there is another method, search(), that does expect a regex. Like
// indexOf(), it returns the first index on which the expression was
// found, or -1 when it wasn't found.
console.log("44:", "  word".search(/\S/)); // 2
console.log("45:", "     ".search(/\S/));  // -1

// Unfortunately, there is no way to indicate that the match should
// start at a give offset (like we can with the second argument of
// indexOf()),which would have been useful.



// The LastIndex Property:

// The exec() method doesn't provide a convenient way to search from
// a given position in a string, but it does provide an inconvenient
// way.

// RegExp objects have properties. One property is "source", which
// contains the string that the expression was created from. Another
// property is "lastIndex", which controls, in limited circumstances,
// where the next match will start.

// Those circumstances are that the regex must have the global (g)
// or sticky (y) option enabled, and the match must happen through
// the exec method.
let pattern2 = /y/g;
pattern2.lastIndex = 3;
let match2 = pattern2.exec("xyzzy");
console.log("46:", match2.index);    // 4
console.log("47:", pattern2.lastIndex);  // 5

// If the match was successful, the call to exec() automatically
// updates the lastIndex property after the match. If no match was
// found, lastIndex is set back to 0, just like a newly constructed
// regexp object.

// Difference betweend global and sticky options:
// When sticky is enabled, the match will succeed only if it starts
// directly at lastIndex, whereas with global, it will search ahead
// for a position where a match can start.
let global2 = /abc/g;
console.log("48:", global2.exec("xyz abc"));    // ["abc"]

let sticky = /abc/y;
console.log("49:", sticky.exec("xyz abc"));     // null

// When using a shared regex value for multiple exec() calls, these
// automatic updates to the "lastIndex" property can cause problems.
// Your regex might be accidentally starting at an index left over
// from a previous call.
let digit2 = /\d/g;
console.log("50:", digit2.exec("here it is: 1"));    // ["1"]
console.log("51:", digit2.exec("and now: 1"));  // null

// Another interesting effect of the global option is that it changes
// the way the match() method on strings works. When called with a
// global expression, instead of returning an array similart to that
// returned by exec(), match() will find ALL matches of the pattern
// in the string and return an array containing the matched strings.
console.log("52:", "Banana".match(/an/g));  // ["an", "an"]

// Be cautious with global regex. The cases where they are necessary -
// calls to replace() and places where you want to explicitly use
// "lastIndex" - are typically the situations where you want to use
// them.

// A common thing to do is to find all the matches of a regex in a
// string. We can do this by using the matchAll() method.

// This method returns an array of match arrays. The regex given to
// matchAll() MUST have "g" enabled.
let input = "A string with 3 numbers in it... 42 and 88.";
let matches = input.matchAll(/\d+/g);
for (let match of matches) {
    console.log("53:", "Found", match[0], "at", match.index);
}
/*
Found 3 at 14
Found 42 at 33
Found 88 at 40
*/



// Parsing an INI File:

//