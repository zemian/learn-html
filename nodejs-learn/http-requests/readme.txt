Simplified HTTP request client.

Request is designed to be the simplest way possible to make http calls.
It supports HTTPS and follows redirects by default.

https://github.com/request/request

== For PUT/POS examples:

    var postData =

    var options = {
        method: 'PUT',
        body: {
            name: 'test',
            value: 'test'
        },
        headers: {
            "foo": "bar"
        },
        json: true,
        url: 'http://api.example.com/doc101'
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

