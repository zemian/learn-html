/*
A JavaScript date is fundamentally specified as the number of milliseconds
that have elapsed since midnight on January 1, 1970, UTC. (Unix Epoch time)
 */

console.log('Epoch time: ' + Date.now());
console.log('Epoch time: ' + new Date().getTime()); // in milliseconds
console.log('getTimezoneOffset() ' + new Date().getTimezoneOffset() / 60); // convert result to hours

/*
Conversions
 */
console.log('toString: ' + new Date().toString());
console.log('toLocaleString: ' + new Date().toLocaleString());
console.log('toISOString: ' + new Date().toISOString());
console.log('toUTCString: ' + new Date().toUTCString());
console.log('toJSON: ' + new Date().toJSON());

/*
Timezone

Note: It's important to keep in mind that while the time value at the heart of a Date
object is UTC, the basic methods to fetch the date and time or its components all work in
the local (i.e. host system) time zone and offset.
 */
console.log('UTC: ' + new Date().toLocaleString("en-US", {timeZone: "UTC"}));
console.log('America/New_York: ' + new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
console.log('Asia/Shanghai: ' + new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai"}));
