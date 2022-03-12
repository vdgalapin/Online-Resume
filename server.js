// Load Node modules
var express = require('express');

// Add the EJS Node Moduleto the server
const ejs = require('ejs');

// Initialise Express
var app = express();

// Render static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
// Specifies the URL of the website the code will activate on
// req stands for request
// res stands for response

// Get and Post
// Get routes display pages
// Post routes upload data from the front-end to the server
app.get('/', function(req, res) {
	var Dad = "Rosvic";
	var Mom = "Julifer";
	var Kids = ["Vyron", "Jag", "Jewl", "Vince"];

	// Render index page
	res.render('pages/index', {
		// EJS variable and server-side variable
		Dad: Dad,
		Mom: Mom,
		Kids: Kids
	});
});
