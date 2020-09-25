
// == Regexp constructor and literal
var regex1 = /\w+/;
var regex2 = new RegExp('\\w+');

console.log("regex1", regex1);
// expected output: /\w+/

console.log("regex2", regex2);
// expected output: /\w+/

// This will return FALSE!!!
console.log("regex1 === regex2", regex1 === regex2);

// == Regex flags
/*
 g
 global match; find all matches rather than stopping after the first match
 i
 ignore case; if u flag is also enabled, use Unicode case folding
 m
 multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string)
 s
 "dotAll"; allows . to match newlines
 u
 Unicode; treat pattern as a sequence of Unicode code points (see also Binary strings)
 y
 sticky; matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes).
 */


// == The String.match() method retrieves the result of matching a string against a regular expression.
console.log("String.match1: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match("Zemian"));
console.log("String.match2: ", "Zemian vs Onur 18-21, 11-21, 21-19".match("Zemian|Yuliang"));
console.log("String.match3: ", "Onur vs Yuliang 18-21, 11-21, 21-19".match("Zemian|Yuliang"));
console.log("String.match4: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match(" vs "));
console.log("String.match5: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match("Hello"));
console.log("String.match6: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match(/Zemian/));
console.log("String.match6: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match(/(\w+) vs (\w+)/));
console.log("String.match7: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match(/((\w+) vs (\w+))/));
console.log("String.match8: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match(/(\w+) vs (\w+)/g));
console.log("String.match9: ", "Zemian vs Yuliang 18-21, 11-21, 21-19".match(/((\w+) vs (\w+))/g));

// == Using RegExp obj
console.log("Regexp.exec1: ", RegExp("Zemian").exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec2: ", RegExp("Zemian|Yuliang").exec("Zemian vs Onur 18-21, 11-21, 21-19"));
console.log("Regexp.exec3: ", RegExp("Zemian|Yuliang").exec("Onur vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec4: ", RegExp(" vs ").exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec5: ", RegExp("Hello").exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec6: ", RegExp(/Zemian/).exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec6: ", RegExp(/(\w+) vs (\w+)/).exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec7: ", RegExp(/((\w+) vs (\w+))/).exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec8: ", RegExp(/(\w+) vs (\w+)/g).exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));
console.log("Regexp.exec9: ", RegExp(/((\w+) vs (\w+))/g).exec("Zemian vs Yuliang 18-21, 11-21, 21-19"));

