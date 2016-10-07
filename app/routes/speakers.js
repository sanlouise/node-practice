var express = require('express');
var router = express.Router();

app.get('/speakers', function(req, res) {
	var info = '';
	dataFile.speakers.forEach(function(item){
		info += `
		<li>
			<h2>${item.name}</h2>
			<p>${item.summary}</p>
		</li>
		`;
	})
	res.send(`

		<h1>Business Meetings</h1>
		${info}

		`);
});

app.get('/speakers/:speakerid', function(req, res) {
	var speaker = dataFile.speakers[req.params.speakerid];
	res.send(`

		<h1>${speaker.title}</h1>
		<h3>with ${speaker.name}</h3>
		<p>${speaker.summary}</p>

		`);
});

module.exports = router;
