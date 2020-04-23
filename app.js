var http = require('http'),
    logger = require("morgan"),
    path = require('path'),
    express = require('express'),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    dotenv = require('dotenv')
    dotenv.config();
    
const exphbs = require('express-handlebars');

var router = express();
var port = 3000;

var movieCtrl = require('./movie-controller');

router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const movieRoute = require('./routes');
router.use('/', movieRoute);

router.use(express.static(path.resolve(__dirname, 'views')));

router.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect(process.env.MONGODB_TOKEN);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});
