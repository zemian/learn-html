const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Express looks up the files relative to the static directory,
// so the name of the static directory is not part of the URL.
app.use(express.static("public"));

// Setup 2nd directory with a virtual path
//app.use('/files', express.static("files"));
app.use('/files', express.static(path.join(__dirname, "files")));


// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
