// load express as a routing engine
var express = require('express'),
router = express.Router(),
movieCtrl = require('./movie-controller');

// render landing page
router.get('/', (req, res) => {
    res.render("movieView/mainForm", {
        viewTitle: "Add a Movie to your List"
    });
});
// create new movie or update if id already exist
router.post('/movies/', (req, res) =>{
    console.log(req.body);
    if(req.body._id==''){
        movieCtrl.createMovie(req, res);
    }else{
        movieCtrl.updateMovie(req, res);
    }
});
// aditional routes - get all, get specific, delete 
router.get('/movies/', movieCtrl.getMovies);
router.get('/movies/list', movieCtrl.getMovies);
router.get('/movies/:id', movieCtrl.getMovie);
router.get('/movies/del/:id', movieCtrl.deleteMovie);

// export routes
module.exports = router;