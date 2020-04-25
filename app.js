
// LOAD necessary modules and dependacies
var http = require('http'),
    logger = require("morgan");
    path = require('path'),
    express = require('express'),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    dotenv = require('dotenv')
    dotenv.config();
// Express handlebars as viewing engine      
const exphbs = require('express-handlebars');

var router = express();
var port = process.env.PORT || 3000;
// controller 
var movieCtrl = require('./movie-controller');
// handling JSON with body-parser
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// load routes
const movieRoute = require('./routes');
router.use('/', movieRoute);
// setting new view engine
router.set('views', path.join(__dirname, '/views/'));
router.set('view engine', 'hbs');
router.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}))

router.listen(port, function(err){
    console.log("Listening on Port: " + port)
});
// DB Connection
mongoose.connect(process.env.MONGODB_TOKEN);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});
// Avoid deprecated mongoDB query
mongoose.set('useFindAndModify', false);