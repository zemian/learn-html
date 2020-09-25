console.log("== String declaration");
var s = "one";
var s2 = new String("two");
var s3 = String("three");  // This is actually a string literal!
var s4 = `string interpreted ${s2}`;
console.log('s, s2, s3, s4:', s, s2, s3, s4);
console.log('s vs s.toString():', s, s.toString());
console.log('s2 vs s2.toString():', s2, s2.toString());

console.log("== String types");
console.log('typeof s:', typeof s);
console.log('typeof s2:', typeof s2);
console.log('typeof s2.toString():', typeof s2.toString());

console.log("== String concatenation");
console.log("one" + " " + "two");
console.log("one".concat(" ").concat("two"));

console.log("== String searching");
console.log("Hello.charAt(1)", "Hello".charAt(1));
console.log("Hello.indexOf(\"e\")", "Hello".indexOf("e"));

console.log("== Comparing string / for sorting");
console.log('"ABC".localeCompare("ABD")', "ABC".localeCompare("ABD"));
console.log('"ABD".localeCompare("ABC")', "ABD".localeCompare("ABC"));
console.log('"ABC".localeCompare("ABC")', "ABC".localeCompare("ABC"));

console.log("== String matching");
console.log('"Hello".includes("e")', "Hello".includes("e"));
console.log('"Hello".includes("x")', "Hello".includes("x"));
console.log('"Hello".endsWith("lo")', "Hello".endsWith("lo"));
console.log('"Hello".startsWith("He")', "Hello".startsWith("He"));

console.log("== String slice vs substring");
// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
console.log('"Hello".slice(3, 5)', "Hello".slice(3, 5));
console.log('"Hello".substring(3, 5)', "Hello".substring(3, 5));

console.log("== String replace");
console.log('"Hello".replace("l", "L")', "Hello".replace("l", "L")); // Replace only 1 char!
console.log('"Hello".replace(/l/g, "L")', "Hello".replace(/l/g, "L")); // Replace all chars!

console.log("== String match vs matchAll");
// https://developers.google.com/web/updates/2019/02/string-matchall
let regex = /t(e)(st(\d?))/g;
let string = 'test1test2';
let results = string.match(regex);
console.log(results);
// → ['test1', 'test2']

regex = /t(e)(st(\d?))/g;
string = 'test1test2';
matches = string.matchAll(regex);
for (const match of matches) {
    console.log(match);
}

