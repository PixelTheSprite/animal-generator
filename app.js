let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let generator = require('./generator');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
	// console.log('function has been called.');
	let animal = generator();
	res.render('home', {animal: animal});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log('The Animal Generator server has started!');
});