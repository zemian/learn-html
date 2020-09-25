var request = require('request');
var url = "http://localhost:5984/hello/doc101";

request.get(url, (err, resp, body) => {
    // console.log(body);
    let doc = JSON.parse(body);
    updateDoc(doc._rev);
});

function updateDoc(docRev) {
    var postData = {
        "motto": "Updating doc101 for testing. ts=" + new Date(),
        "_rev": docRev
    };

    var options = {
        url: url,
        method: 'PUT',
        body: postData,
        json: true
    };

    request(options, function (err, res, body) {
        if (err) {
            console.error('error posting json: ', err);
            throw err;
        }
        var headers = res.headers;
        var statusCode = res.statusCode;
        console.log('headers: ', headers);
        console.log('statusCode: ', statusCode);
        console.log('body: ', body);
    });

}
