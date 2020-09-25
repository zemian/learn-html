let request = require("request");
let url = "http://localhost:5984/hello";
let options = {
    url: url,
    method: 'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: '{"motto": "JS is cool."}',
};
request(options, (err, resp, body) => {
    //console.log(err, resp, body);
    console.log("RESULT: ", body);
});
