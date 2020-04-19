var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
      title: String,
      year: String,
      genre: String,
      cast: String,
      dateOfCreation: Date
   });

   module.exports = mongoose.model('Movie', movieSchema);