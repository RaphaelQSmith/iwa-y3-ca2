var Movie = require('./models/movies');

exports.createMovie = function(req, res){
    var newMovie = new Movie(req.body);
    newMovie.save(function(err, movie){
        if(err){
            res.status(400).json(err)
        }
        res.json(movie);
    })
}

exports.getMovies = function(req, res){
    Movie.find({}, function(err, movies){
        if(err){
            res.status(400).json(err)
        }
        res.json(movies);
    })
    }

exports.getMovie = function(req, res) {
  Movie.findOne({_id: req.params.id}, function (err, movie) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(movie);
  }); 
};

exports.updateMovie = function(req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(user);
  }); 
};

exports.deleteMovie = function(req, res) {
  Movie.findByIdAndRemove(req.params.id, function (err, movie) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(movie);
  }); 
};
