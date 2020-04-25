var Movie = require('./models/movies');

// create CRUD functions to be use by routes.js
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
})}
// get whole movie list
exports.getMovies = (req, res)=>{
    Movie.find((err, docs)=>{
        if(!err){
            res.render("movieView/list", {
                list: docs
            });
        }
        else {
            console.log(err);
        }
    })
}
// returns a movie to be updated
exports.getMovie = function(req, res) {
  Movie.findOne({_id: req.params.id}, function (err, movie) {
    if (err) {
      res.status(400).json(err);
    } 
    res.render('movieView/mainForm',{
        viewTitle: 'Change movie info',
        item: movie 
    })
  }); 
};
// update existing movie
exports.updateMovie = function(req, res) {
  Movie.findOneAndUpdate({_id: req.body._id}, req.body, {new: true},function (err, movie) {
    if (err) {
      res.status(400).json(err);
    } 
    res.redirect("/movies/list");
}); 
};
// delete movie from DB
exports.deleteMovie = function(req, res) {
  Movie.findByIdAndRemove(req.params.id, function (err, movie) {
    if (err) {
        res.redirect('/movies/list');
    } 
      res.redirect('/movies/list');
  });   
};
