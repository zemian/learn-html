const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded());

app.post('/signup/post', function (req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    res.send(`Processing form data: ${[username, email, password]}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
