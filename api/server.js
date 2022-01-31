// Define app using express
var express = require("express")
var app = express()

// Require database file
var db = require("./database.js")

// Make Express use its own built-in body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Make Express use CORS
const cors = require("cors");
const { request } = require("http");
app.use(cors());

// Set server port
const HTTP_PORT = 7982

// Start server
app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`)
});

// (HTTP method GET) verify backend is live at root endpoint /app/
app.get("/app/", (req, res, next) => {
    res.json({"message":"Your API works! (200)"});
	res.status(200);
});

// (HTTP method GET) retrieve a specific Pokemon from the Dex
app.get("/app/pokemon/:id", (req, res, next) => {
    //console.log(req.params.id);
	try {
		const entry = db.prepare("SELECT * FROM pokemonInfo WHERE id = ?").get(req.params.id);
		res.status(200).json(entry); 
	} catch(error) {
		res.status(400).json({
			"Query": req.params,
			"Error": error.name,
			"Message": error.message
		});
	}
});



// (HTTP method GET) retrieve a full list of pokemon based on set of inputs from filters
app.get("/app/fltrd/:FULLQUERYSTRING", (req, res, next) => {
	try {
		console.log(req.params.FULLQUERYSTRING);
		const feedbk = db.prepare(req.params.FULLQUERYSTRING).all();
		res.status(200).json(feedbk); 
	} catch(error) {
		res.status(400).json({
			"Query": req.params,
			"Error": error.name,
			"Message": error.message
		});
	}
});
