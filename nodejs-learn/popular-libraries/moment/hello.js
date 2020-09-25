let moment = require("moment");

// Display time
let now = moment();
console.log('now: ' + now);
console.log('toString: ' + now.toString());
console.log('unix: ' + now.unix()); // seconds
console.log('valueOf: ' + now.valueOf()); // milliseconds
console.log('toJSON: ' + now.toJSON());
console.log('toISOString: ' + now.toISOString());
console.log('toArray: ' + now.toArray());
console.log('toDate: ' + now.toDate());
console.log('inspect: ' + now.inspect());
console.log('fromNow: ' + now.fromNow());
console.log('from 2020-01-01: ' + now.from("2020-01-01"));
console.log('calendar: ' + now.calendar());
console.log('format: ' + now.format());
console.log('format YYYY-MM-DDTHH:mm:ssZ: ' + now.format('YYYY-MM-DDTHH:mm:ssZ'));
console.log('format LLL: ' + now.format('LLL'));

// Parsing
console.log("parse 2020-01-01: " + moment("2020-01-01").toString());
console.log("parse 2020-01-01T00:00:00-0500: " + moment("2020-01-01T00:00:00-0500").toString());
console.log("parse Wed Jan 01 2020 00:00:00 GMT-0500: " + moment("2020-01-01").toString());
console.log("parse 12-25-1995+Format: " + moment("12-25-1995", "MM-DD-YYYY").toString());
console.log("parse 12/25/1995+Format: " + moment("12/25/1995", "MM/DD/YYYY").toString());
