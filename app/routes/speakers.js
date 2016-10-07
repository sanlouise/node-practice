var express = require('express');
var router = express.Router();


router.get('/speakers', function(req, res) {

	var info = '';
	//Grab information made available in app.js
	var dataFile = req.app.get('appData');
	dataFile.speakers.forEach(function(item){
		info += `
		<li>
			<h2>${item.name}</h2>
			<p>${item.summary}</p>
		</li>
		`;
	})
	res.send(`

		<link rel="stylesheet" type="text/css" href="css/styles.css">
		<img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
		

		<h1>Business Meetings</h1>
		${info}

		`);
});

router.get('/speakers/:speakerid', function(req, res) {
	//Grab information made available in app.js
	var dataFile = req.app.get('appData');
	var speaker = dataFile.speakers[req.params.speakerid];
	res.send(`
		<link rel="stylesheet" type="text/css" href="css/styles.css">

		<h1>${speaker.title}</h1>
		<h3>with ${speaker.name}</h3>
		<p>${speaker.summary}</p>

		`);
});

module.exports = router;
