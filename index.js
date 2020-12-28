var express = require('express');
var app = express();

var bodyParser = require("body-parser");
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');

db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
  .write()

var port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/tinhdaoham', function(req, res) {
	res.render('tinhdaoham');
});
app.get('/tinhbieuthuc', function(req, res) {
	res.render('tinhbieuthuc');
});
app.get('/doidonvi', function(req, res) {
	res.render('doidonvi');
});
app.get('/hoplihoabieuthuc', function(req, res) {
	res.render('hoplihoabieuthuc');
});
app.get('/dongianbieuthuc', function(req, res) {
	res.render('dongianbieuthuc');
});
app.get('/dayfibo', function(req, res) {
	res.render('dayfibo');
});
app.get('/daylucas', function(req, res) {
	res.render('daylucas');
});


const daylucas = require('./controllers/daylucas.controller.js')

app.post('/daylucas', daylucas);

const dayfibo = require('./controllers/dayfibo.controller.js')

app.post('/dayfibo', dayfibo);

const dongianbieuthuc = require('./controllers/dongianbieuthuc.controller.js')

app.post('/dongianbieuthuc', dongianbieuthuc);
		
const hoplihoabieuthuc = require('./controllers/hoplihoabieuthuc.controller.js')

app.post('/hoplihoabieuthuc', hoplihoabieuthuc);
	
const doidonvi = require('./controllers/doidonvi.controller.js')

app.post('/doidonvi', doidonvi);

const tinhdaoham = require('./controllers/tinhdaoham.controller.js')

app.post('/tinhdaoham', tinhdaoham);

const tinhbieuthuc = require('./controllers/tinhbieuthuc.controller.js')

app.post('/tinhbieuthuc', tinhbieuthuc);

app.listen(port, function(){
	console.log('Server listening on port '+ port);
});