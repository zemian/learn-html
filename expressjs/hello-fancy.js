const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML/CSS/JavaScript Starter</title>
</head>
<body>
<h1>Hello World.</h1>
<p>This is a static folder to explore HTML/CSS/JavaScript Starter.</p>
<p>See <code>readme.md</code> file for more details.</p>
</body>
</html>

`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
