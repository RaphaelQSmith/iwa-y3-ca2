var mongoose = require("mongoose");

// MongoDB style movie Schema
var movieSchema = new mongoose.Schema({
      title: String,
      year: String,
      genre: String,
      cast: String,
   });
// export model 
   module.exports = mongoose.model('Movie', movieSchema);