let port = 3000;
let staticDir = __dirname;

let express = require("express");
let fileUpload = require('express-fileupload');
let serveIndex = require('serve-index');
let app = express();

app.use('/', express.static(staticDir + "/public"));
app.use('/json-samples', express.static(staticDir + "/json-samples"));
app.use('/json-samples', serveIndex(staticDir + "/json-samples"));
app.use('/my-data', express.static(staticDir + "/my-data"));
app.use('/file-upload', fileUpload());

app.listen(port, () => {
    // == Home
    app.get("/", (req, res) => {
        res.sendFile(staticDir + "/index.html");
    });

    // == File Upload Demo
    app.post('/file-upload/post', (req, res) => {
        console.log("Processing file upload.");

        if (!req.files || Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // The name of the input field (i.e. "filename") is used to retrieve the uploaded file
        let filename = req.files.filename;
        //console.log("Got filename", filename);

        // Use the mv() method to place the file somewhere on your server
        filename.mv(staticDir + '/uploads/' + filename.name, function(err) {
            if (err) {
                return res.status(500).send(err);
            }
            res.send('File uploaded!');
        });
    });

    // == API Demo: /api/hello
    app.get("/api/hello", (req, res) => {
        res.json({"message": "Hello World"});
    });

    // == API Demo: /api/samples
    //
    // Deprecated: These are no longer needed since we start using "serverIndex" to allow
    // directory listing.
    //
    // app.get("/api/countries", (req, res) => {
    //     let countries = fs.readFileSync('my-api-server/json-samples/countries.json', 'utf8');
    //     res.json(JSON.parse(countries));
    // });
    // app.get("/api/samples", (req, res) => {
    //     let file = req.query.name;
    //     let content = fs.readFileSync(file, 'utf8');
    //     res.json(JSON.parse(content));
    // });

    // == Done Setup
    console.log("Server running on http://localhost:" + port);
});
