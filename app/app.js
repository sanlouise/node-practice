var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./data/data.json')

app.set('port', process.env.PORT || 3000);
//Set variable to be available to all routes in our app
app.set('appData', dataFile);

//Make css, images, js available to all routes
app.use(express.static('app/public'));

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
	console.log('Express is listening on localhost ' + app.get('port'))
});

reload(server, app);