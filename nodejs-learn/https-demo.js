let https = require('https');
https.get("https://www.oracle.com", (data) => console.log(data));
