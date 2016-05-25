// BOOKS ATTRIBUTES //
// Title , Author, Image (Use a String), ReleaseDate //

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  name: String
});


var BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String,
  characters: [CharacterSchema]
})

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
