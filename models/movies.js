var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
      title: String,
      year: String,
      genre: String,
      cast: String,
   });

   module.exports = mongoose.model('Movie', movieSchema);