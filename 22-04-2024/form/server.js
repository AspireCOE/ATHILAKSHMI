const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;
//bodyParser.urlencoded() middleware helps your Express.js application understand data sent from forms on web pages.
//extended option in this middleware tells Express.js how to interpret the form data.
//When set to false, it uses the basic way of understanding form data.
//When set to true, it uses a more advanced method that can handle complex form data structures.
app.use(bodyParser.urlencoded({ extended: false }));
//bodyParser.json() helps your Express.js app understand JSON data sent by users or clients.
//When a client sends JSON data in the request body, this middleware parses that data and converts it into a JavaScript object(store in req.body object).
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, password,email, phone } = req.body;
    res.send(`<script>alert("Name: ${name},Password: ${password}, Email: ${email}, Phone: ${phone}");</script>`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
