const fs = require('fs');
fs.readdir("../", function (err, files) {
    var htmlFiles = [];
    files.forEach(function (file) {
        if (file === "test.html") {
            return;
        }
        if (file.endsWith(".html")) {
            htmlFiles.push(file);
        }
    });
    console.log(JSON.stringify(htmlFiles));
});
