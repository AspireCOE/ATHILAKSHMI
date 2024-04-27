const express = require('express')
const bodyParser = require('body-parser')
//express is framework and Body parsing middleware is added to handle JSON and URL-encoded request bodies.
//express is used to create the server and define routes, while body-parser is used to parse incoming request bodies.
const books = [{
		bookName: "Rudest Book Ever",
		bookAuthor: "Shwetabh Gangwar",
		bookPages: 200,
		bookPrice: 240,
		bookState: "Available"
	},
	{
		bookName: "Do Epic Shit",
		bookAuthor: "Ankur Wariko",
		bookPages: 200,
		bookPrice: 240,
		bookState: "Available"
	}
]
//This function creates a new Express application.
const app = express()
//he view engine is set to 'ejs', indicating that the application will use EJS (Embedded JavaScript) as its templating engine. 
//Body parsing middleware is added to handle JSON and URL-encoded request bodies.
app.set('view engine', 'ejs') //HTML content dynamically in Express applications -ejs 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))
////this route handler listens for GET requests to the root URL ("/").
app.get("/", function (req, res) { 
	res.render("home", {     //render" refers to the process of generating and sending a response to the client's browser.
		data: books
	})
    //passes the books array to the "home" view template under the variable name data
})
// post method - expects the client to send data representing a new book in the request body.
app.post("/", (req, res) => {
    //extract the book details using req.body
	const inputBookName = req.body.bookName
	const inputBookAuthor = req.body.bookAuthor
	const inputBookPages = req.body.bookPages
	const inputBookPrice = req.body.bookPrice
//It creates a new book object with the extracted details and adds it to the books array using books.push().
	books.push({
		bookName: inputBookName,
		bookAuthor: inputBookAuthor,
		bookPages: inputBookPages,
		bookPrice: inputBookPrice,
		bookState: "Available"
	})
//After adding the book, it re-renders the "home" view, passing the updated books array to it.
	res.render("home", {
		data: books
	})
})

app.post('/issue', (req, res) => {
//t expects the client to send the name of the book to be marked as "Issued" in the request body (req.body.bookName).
	var requestedBookName = req.body.bookName;
//iterates through the books array and finds the book with the provided name.
    books.forEach(book => {
		if (book.bookName == requestedBookName) {
			book.bookState = "Issued";
		}
	})
//After updating the book state, it re-renders the "home" view, passing the updated books array to it.
	res.render("home", {
		data: books
	})
})

app.post('/return', (req, res) => {
	var requestedBookName = req.body.bookName;
	books.forEach(book => {
		if (book.bookName == requestedBookName) {
			book.bookState = "Available";
		}
	})
	res.render("home", {
		data: books
	})
})

app.post('/delete', (req, res) => {
	var requestedBookName = req.body.bookName;
	var j = 0;
//logic:
//the subsequent elements are shifted to fill the gap. To ensure that subsequent iterations still refer to the correct elements,
// the j variable is adjusted accordingly by subtracting 1 ((j - 1)).
	books.forEach(book => {
		j = j + 1;
		if (book.bookName == requestedBookName) {
			books.splice((j - 1), 1) //removes it from the array using Array.splice(index position to be removed, num of element removed).
		}
	})
	res.render("home", {
		data: books
	})
})

app.listen(3000, (req, res) => {
	console.log("App is running on port 3000")
})

// these route handlers implement basic CRUD (Create, Read, Update, Delete) functionality for managing
// a list of books in the application.
// They handle requests to view, add, issue, return, and delete books, and update the view accordingly