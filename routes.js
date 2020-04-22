var express = require('express'),
router = express.Router(),
movieCtrl = require('./movie-controller');


router.post('/movies', movieCtrl.createMovie);
router.get('/movies', movieCtrl.getMovies);
router.get('/movies/:id', movieCtrl.getMovie);
router.delete('/movies/del/:id', movieCtrl.deleteMovie);
router.put('/movies/:id', movieCtrl.updateMovie);

module.exports = router;