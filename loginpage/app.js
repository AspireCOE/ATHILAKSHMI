const express = require("express");
const app = express();
const session = require("express-session"); //It enables the server to store session data
// for each client and maintain the session state across multiple requests.
const cookieParser = require("cookie-parser"); //It simplifies the process of parsing 
//cookies sent by the client and extracting data from them.
//It's often used in conjunction with express-session to parse session cookies and extract session identifiers.
const PORT = 4000;

// Initialization
app.use(cookieParser());

app.use(session({
	secret: "amar",
	saveUninitialized: true,
	resave: true
}));

// User Object

const user = {
	name: "Amar",
	Roll_number: 43,
	Address: "Pune"
};

// Login page
app.get("/login", (req, res) => {
	req.session.user = user;
	req.session.save();
	return res.send("Your are logged in");
});

app.get("/user", (req, res) => {
	const sessionuser = req.session.user;
	res.send(sessionuser);
});

// Logout page 
app.get("/logout", (req, res) => {
	req.session.destroy();
	res.send("Your are logged out ");
});

// Host
app.listen(PORT, () => console.log(`Server at ${PORT}`));
