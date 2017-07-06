//include required stuff
const express = require('express');

const app = express();
//set up express app

//set up pug as the view engine
app.set('view engine', 'pug');

//set up a basic route
app.get('/', function(req, res) {
	res.locals.body = "Heckin' good body.";
	res.render('index');
});

//set up the app to listen on port 3000
app.listen(3000, function() {
	console.log("The app is running on port 3000.");
})