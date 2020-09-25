// Plain http client request
let http = require('http');
http.get("http://localhost:5984/hello/_all_docs", res => {
    let rawData = '';

    res.setEncoding('utf8');
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        // console.log(rawData);
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
});
