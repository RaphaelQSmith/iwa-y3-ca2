var Movie = require('./models/movies');

exports.createMovie = function(req, res){
    console.log(req.body);
    let newMovie = new Movie({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        cast : req.body.cast
    });
    newMovie.save(function(err, movies){
        if(err){
            res.status(400).json(err)
        }
        res.redirect("/movies/list");
        console.log(movies);
    })
}

exports.getMovies = (req, res)=>{
    Movie.find((err,docs)=>{
        if(!err){
            res.render("employee/list", {
                list: docs
            });
        }
        else {
            console.log(err);
        }
    })
}






// function(req, res){
//     Movie.find({}, function(err, movies){
//         if(err){
//             res.status(400).json(err)
//         }else{
//         res.json(movies);
//         res.render("employee/list", {
//             list: movies
//             })
//         }
//     })
//     }

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
