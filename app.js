var http = require('http'),
    logger = require("morgan"),
    path = require('path'),
    express = require('express'),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    dotenv = require('dotenv')
    dotenv.config();

// MongoDB connected 

var router = express();
var port = 3000;
var movieCtrl = require('./movie-controller');

router.use(logger('dev'));
// router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const movieRoute = require('./routes');
router.use('/', movieRoute);

router.use(express.static(path.resolve(__dirname, 'views')));
// router.use(express.json());
// router.use(express.urlencoded({extended: true})); 



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
    

















// function xmlFileToJs(filename, cb) {
//   var filepath = path.normalize(path.join(__dirname, filename));
//   fs.readFile(filepath, 'utf8', function(err, xmlStr) {
//     if (err) throw (err);
//     xml2js.parseString(xmlStr, {}, cb);
//   });
// }

// function jsToXmlFile(filename, obj, cb) {
//   var filepath = path.normalize(path.join(__dirname, filename));
//   var builder = new xml2js.Builder();
//   var xml = builder.buildObject(obj);
//   fs.unlinkSync(filepath);
//   fs.writeFile(filepath, xml, cb);
// }




// router.get('/get/html', function(req,res){

//     res.writeHead(200, {'Content-Type':'text/html'});

//     var xml = fs.readFileSync("movies.xml", 'utf8');
//     var xsl = fs.readFileSync("movies.xsl", 'utf8');
    
//     var doc = xmlParse(xml);
//     var stylesheet = xmlParse(xsl);

//     var result = xsltProcess(doc, stylesheet);

//     res.end(result.toString());

// });

// router.post('/post/json', function(req, res) {

//   function appendJSON(obj) {
//     xmlFileToJs('movies.xml', function(err, result) {
//       if (err) throw (err);
//       result.movielist.movie.push({'title': obj.title, 'year': obj.year, 'genre': obj.genre, 'cast': obj.cast}); 
//       jsToXmlFile('movies.xml', result, function(err) {
//         if (err) console.log(err);
//       })
//     })
//   };
//   appendJSON(req.body);
//   res.redirect('back');
// });

// router.post('/post/delete', function(req, res) {

//     function deleteJSON(obj) {
    
//     xmlFileToJs('movies.xml', function(err, result) {
//       if (err) throw (err);
//       delete result.movielist.movie[obj.movie];
//       jsToXmlFile('movies.xml', result, function(err) {
//         if (err) console.log(err);
//       })
//     })
//   }
//   deleteJSON(req.body);
// });

