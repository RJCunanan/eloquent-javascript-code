// .test() method:
let regex = /abc/;
let string = "tabcesf";
let string2 = "1ab8c856";
console.log("1:", regex.test("12abc89"));
console.log("2:", regex.test(string));
console.log("3:", regex.test(string2));


// Checking for proper formatting of date:
let date = "10-02-2024";
let otherDate = "October 2, 2024";
let regex2 = /\d\d-\d\d-\d\d\d\d/;
console.log("4:", regex2.test(date));
console.log("5:", regex2.test(otherDate));

let writtenDateRegEx = /[A-Z][a-z]+ \d{1,2}, \d{4}/;
console.log("6:", writtenDateRegEx.test(otherDate));
console.log("7:", writtenDateRegEx.test("November 24, 1976"));
console.log("8:", writtenDateRegEx.test("november 24, 1976"));
console.log("9:", writtenDateRegEx.test("November 4, 1976"));
console.log("10:", writtenDateRegEx.test("November , 1976"));
console.log("11:", writtenDateRegEx.test("November 24, 197"));
console.log("12:", writtenDateRegEx.test("November  24, 1976"));    // using tabs
console.log("13:", writtenDateRegEx.test("November 244, 1976"));

// Using Number():
console.log("14:", typeof("1957"));
console.log("15:", typeof(Number("1957")));