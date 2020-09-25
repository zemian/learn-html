var rp = require('request-promise-native');
rp('http://www.google.com')
    .then(function (htmlString) {
        // Process html...
        console.log(htmlString);
    })
    .catch(function (err) {
        // Crawling failed...
        console.log("ERROR: ", err);
    });
