var express = require('express'),
router = express.Router(),
movieCtrl = require('./movie-controller');

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Add a Movie to your List"
    });
});

router.post('/movies/', (req, res) =>{
    console.log(req.body);
    if(req.body._id==''){
        movieCtrl.createMovie(req, res);
    }else{
        movieCtrl.updateMovie(req, res);
    }
});

router.get('/movies/', movieCtrl.getMovies);
router.get('/movies/list', movieCtrl.getMovies);
router.get('/movies/:id', movieCtrl.getMovie);
router.get('/movies/del/:id', movieCtrl.deleteMovie);

module.exports = router;