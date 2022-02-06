const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
    
    title: {type: String, required: true},
    description: {type: String, default: 'No description available.'},
    year: {type: Number},
    quantity: {type: Number, default: 0},
    imageURL: {type: String}
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;