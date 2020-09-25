let request = require("request");
let url = "http://localhost:5984/hello/doc101";
request.get(url, (err, resp, body) => {
    console.log(body);

    let doc = JSON.parse(body);
    console.log("doc._rev: " + doc._rev);
});
