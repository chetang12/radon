const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: String,
    year: Number,
    isPublish: Boolean,
    price:Number,
    
}, { timestamps: true });

module.exports = mongoose.model('high', bookSchema) //users


