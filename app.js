const volleyball = require('volleyball');  //logger
const express = require('express'); //require express
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const User = require('./models/models').User;


// have res.render work with html files
app.set('view engine', 'html');

// when giving html files to res.render, tell it to use nunjucks
app.engine('html', nunjucks.render);

// point nunjucks to the directory containing templates and
// turn off caching; configure returns an Environment instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});

//use the logger in case of errors
app.use(volleyball);

//url-encoded & JSON parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up static route and main page route
app.use(express.static('public'))
app.use('/', routes);

//error handling
// app.use(function(err, req, res, next){
//     Console.error(err);
//     Res.status(500).send(err.message);
// }

//sync database (force: true will delete all data in tables each time)

User.sync({force: false});

//tell server which port to listen on
app.listen(3000);
console.log('server listening');



