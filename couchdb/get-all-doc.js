let request = require("request");
let url = "http://localhost:5984/hello/_all_docs";

request.get(url, (err, resp, body) => {
    // console.log(body);
    let result = JSON.parse(body);

    result.rows.forEach(row => {
        console.log(row);
    });

    console.log("total_rows: " + result.total_rows);
    console.log("offset: " + result.offset);
});
