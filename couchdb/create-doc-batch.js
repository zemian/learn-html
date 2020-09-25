
let request = require("request");

function getFormattedDate(date) {
    let hour = date.getHours().toString().padStart(2, '0');
    let min = date.getMinutes().toString().padStart(2, '0');
    let sec = date.getSeconds().toString().padStart(2, '0');
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return hour + min + sec +  month + day + year;
}

var numOfDocs = parseInt(process.argv[2] || 100);
for (var i = 1; i <= numOfDocs; i++) {
    let docPrefix = "test" + getFormattedDate(new Date()) + "_";
    let url = "http://localhost:5984/hello/" + docPrefix + i;
    let options = {
        url: url,
        method: 'PUT',
        body: {"motto": "JS is cool. Test doc#" + i},
        json: true
    };
    request(options, (err, resp, body) => {
        console.log("RESULT: ", body);
    });
}
