// Load Node modules
var express = require('express');

const bodyParser = require('body-parser');
const mongoos = require('mongoose');

// Add the EJS Node Moduleto the server
const ejs = require('ejs');

// Initialise Express
var app = express();



// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
// Render static files
app.use(express.static('public'));


// Port website will run on
app.listen(process.env.PORT || 5000);

// *** GET Routes - display pages ***
// Specifies the URL of the website the code will activate on
// req stands for request
// res stands for response

// Get and Post
// Get routes display pages
// Post routes upload data from the front-end to the server
app.get('/', function(req, res) {
	// Render index page
	res.render('pages/index');
});
