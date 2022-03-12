// Load Node modules
var express = require('express');

// Add the EJS Node Moduleto the server
const ejs = require('ejs');

// Initialise Express
var app = express();

// Render static files
app.use(express.static('webpage'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***
app.get('/', function(req, res) {
	var Dad = "Rosvic";
	var Mom = "Julifer";
	var Kids = ["Vyron", "Jag", "Jewl", "Vince"];

	// Render index page
	res.render('pages/index', {
		// EJS variable and server-side variable
		Dad: Dad,
		Mom: Mom,
		Kids:  kids
	});
});
