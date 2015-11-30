
// require express and other modules
var express = require('express'),
	app = express();
	http = require('http').Server(app),
	bodyParser = require('body-parser'),
	io = require('socket.io')(http);


// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// homepage route
app.get('/', function (req, res) {
	res.render('index');
});

// connect to socket
io.on('connection', function (socket) {
	console.log('a user connected');

// receive and broadcast chat messages
socket.on('chat message', function (msg) {
	console.log('message:', msg);
	io.emit('chat message', msg);
});

	socket.on('disconnect', function () {
		console.log('user disconnected');
	});
});


http.listen(process.env.PORT || 3000, function() { 
// listen on port localhost: 3000
// http.listen(3000, function() {
	console.log('server started');
});